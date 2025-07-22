"use client";

import { Table, TableProps, Image } from "antd";
import useOrganizationStore from "../../../store/organization";
import { MootasiReceiptsSchema } from "../schema/mootasi-receipt.schema";
import useMootasiReceiptList from "../hooks/use-mootasi-receipt-list";
import { formatToRupiah } from "../../../utils/currency";

export default function MootasiReceiptsTable() {
    const { selectedOrganization } = useOrganizationStore();
    const mootasiReceiptsHooks = useMootasiReceiptList(
        selectedOrganization?.id
    );

    const columns: TableProps<MootasiReceiptsSchema>["columns"] = [
        {
            title: "Photo",
            dataIndex: "image_url",
            key: "image_url",
            render: (picture) => {
                if (!picture) {
                    return (
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-md">
                            <span className="text-gray-500">No Image</span>
                        </div>
                    );
                }

                return (
                    <Image
                        src={picture}
                        alt="picture"
                        className="w-16 h-16 object-cover rounded-md"
                    />
                );
            },
            width: 80,
        },
        {
            title: "Nomor Nota",
            dataIndex: "number",
            key: "number",
        },
        {
            title: "Tanggal",
            dataIndex: "receipt_date",
            key: "receipt_date",
        },
        {
            title: "Tanggal Upload",
            dataIndex: "upload_date",
            key: "upload_date",
        },
        {
            title: "Supplier",
            dataIndex: "supplier",
            key: "supplier",
        },
        {
            title: "Subtotal",
            dataIndex: "subtotal",
            key: "subtotal",
            render: (value) => formatToRupiah(value),
            align: "right",
        },
        {
            title: "Service",
            dataIndex: "service",
            key: "service",
            render: (value) => formatToRupiah(value),
            align: "right",
        },
        {
            title: "PPN",
            dataIndex: "ppn",
            key: "ppn",
            render: (value) => formatToRupiah(value),
            align: "right",
        },
        {
            title: "Tax",
            dataIndex: "tax",
            key: "tax",
            render: (value) => formatToRupiah(value),
            align: "right",
        },
        {
            title: "Discount",
            dataIndex: "discount",
            key: "discount",
            render: (value) => formatToRupiah(value),
            align: "right",
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
            render: (value) => (
                <span className="font-semibold text-green-600">
                    {formatToRupiah(value)}
                </span>
            ),
            align: "right",
        },
    ];

    return (
        <div className="w-full">
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <Table<MootasiReceiptsSchema>
                    dataSource={
                        mootasiReceiptsHooks.data && mootasiReceiptsHooks.data.data
                            ? mootasiReceiptsHooks.data.data
                            : []
                    }
                    loading={mootasiReceiptsHooks.isLoading}
                    columns={columns}
                    pagination={false}
                    rowKey={(row) => row.id}
                />
            </div>
        </div>
    );
}