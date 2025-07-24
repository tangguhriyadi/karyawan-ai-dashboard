"use client";

import Link from "next/link";
import { Radio, Spin, Typography, Button } from "antd";
import MootasiReceiptItemsTable from "./components/mootasi-receipt-items-table";
import { useCallback, useEffect, useState } from "react";
import MootasiReceiptsTable from "./components/mootasi-receipt-table";
import useVerifyMootasiLicense from "./hooks/use-verify-mootasi-license";
import useMootasiChatbotLink from "./hooks/use-mootasi-chatbot-link";
import { DownloadOutlined, WechatOutlined } from "@ant-design/icons";
import MootasiRegisterForm from "./components/mootasi-register-form";
import { useNotificationBar } from "../../providers/NotificationProvider";
import useDownloadExcelReceiptItems from "./hooks/use-download-excel";
import useOrganizationStore from "../../store/organization";

const MootasiPage = () => {
    const [mode, setMode] = useState<string>("items");
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [isExpired, setIsExpired] = useState<boolean>(false);
    const [isUnpaid, setIsUnpaid] = useState<boolean>(false);
    const { data, isLoading } = useVerifyMootasiLicense();
    const { selectedOrganization } = useOrganizationStore();

    useEffect(() => {
        if (data && data.data) {
            if (data.data.length > 0 && data.data[0].is_active) {
                if (data.data[0].finish_at < new Date().toISOString()) {
                    setIsExpired(true);
                } else {
                    setIsVerified(true);
                    setIsUnpaid(false);
                }
            } else {
                setIsVerified(false);
            }

            if (data.data.length === 0) {
                setIsUnpaid(true);
            }
        }

        // if (!isLoading && !data?.data) {
        //     setIsUnpaid(true);
        // }
    }, [data]);

    const chatbotLinkHook = useMootasiChatbotLink(
        data && data.data && data.data.length > 0 ? data.data[0].id : undefined
    );

    const { openNotificationBar } = useNotificationBar();

    const downloadDetailHook = useDownloadExcelReceiptItems();

    const handleClickDownloadDetail = useCallback(async () => {
        try {
            const data = await downloadDetailHook.mutateAsync({
                org_id: selectedOrganization?.id ?? 0,
            });

            if (data) {
                // Extract file name from Content-Disposition header
                const contentDisposition =
                    data.headers?.["content-disposition"];
                let fileName = "file.xlsx"; // Fallback name

                if (contentDisposition) {
                    const [, matchedFileName] =
                        /filename=([^;]+)/.exec(contentDisposition) || [];
                    if (matchedFileName) {
                        fileName = matchedFileName; // Use the destructured match
                    }
                }

                // Create a blob and download the file
                const url = window.URL.createObjectURL(new Blob([data.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", fileName);
                document.body.appendChild(link);
                link.click();
                link.parentNode?.removeChild(link);
            }
        } catch {
            openNotificationBar({
                title: "Gagal",
                type: "error",
                message: "Gagal mengunduh file",
            });
        }
    }, [downloadDetailHook, selectedOrganization, openNotificationBar]);

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-full w-full">
                <Spin size="large" />
            </div>
        );
    if (isExpired) return <div>License expired</div>;
    if (isUnpaid) return <div>Kamu belum beli fitur ini</div>;
    if (!data || !data.data) return null;

    if (!isVerified)
        return <MootasiRegisterForm license_id={data.data[0]?.id ?? ""} />;

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-2 justify-between items-center !mb-2">
                <Typography.Title className="!mb-0" level={4}>
                    Mootasi
                </Typography.Title>
                {chatbotLinkHook.data &&
                    chatbotLinkHook.data.data &&
                    chatbotLinkHook.data.data.chatbot_link && (
                        <Link
                            href={
                                chatbotLinkHook.data?.data?.chatbot_link ?? ""
                            }
                            target="_blank"
                        >
                            <Button
                                type="primary"
                                size="small"
                                icon={<WechatOutlined />}
                            >
                                Chat Sekarang
                            </Button>
                        </Link>
                    )}
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-between">
                <Radio.Group
                    value={mode}
                    buttonStyle="solid"
                    size="large"
                    className="!text-[15px] flex w-max gap-2 px-1"
                    onChange={(e) => {
                        setMode(e.target.value);
                    }}
                >
                    <Radio.Button
                        value="receipts"
                        className="min-w-[100px] text-center capitalize text-xs sm:text-sm md:text-base"
                    >
                        Nota
                    </Radio.Button>
                    <Radio.Button
                        value="items"
                        className="min-w-[100px] text-center capitalize text-xs sm:text-sm md:text-base"
                    >
                        Item
                    </Radio.Button>
                </Radio.Group>
                <Button
                    onClick={handleClickDownloadDetail}
                    icon={<DownloadOutlined />}
                >
                    Download
                </Button>
            </div>
            {
                <>
                    {mode === "items" ? (
                        <MootasiReceiptItemsTable />
                    ) : (
                        <MootasiReceiptsTable />
                    )}
                </>
            }
        </div>
    );
};

export default MootasiPage;
