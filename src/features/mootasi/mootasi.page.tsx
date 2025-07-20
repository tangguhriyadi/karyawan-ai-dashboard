"use client";

import Link from "next/link";
import { Radio, Spin, Typography, Button } from "antd";
import MootasiReceiptItemsTable from "./components/mootasi-receipt-items-table";
import { useEffect, useState } from "react";
import MootasiReceiptsTable from "./components/mootasi-receipt-table";
import useVerifyMootasiLicense from "./hooks/use-verify-mootasi-license";
import useMootasiChatbotLink from "./hooks/use-mootasi-chatbot-link";
import { WechatOutlined } from "@ant-design/icons";
import MootasiRegisterForm from "./components/mootasi-register-form";

const MootasiPage = () => {
    const [mode, setMode] = useState<string>("items");
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [isExpired, setIsExpired] = useState<boolean>(false);
    const [isUnpaid, setIsUnpaid] = useState<boolean>(false);
    const { data, isLoading } = useVerifyMootasiLicense();

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
        return <MootasiRegisterForm license_id={data.data[0].id} />;

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
            <div className="overflow-x-auto scrollbar-hide">
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
