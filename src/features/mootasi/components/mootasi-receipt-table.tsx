"use client";

import { Table, TableProps, Image, Tag,  Typography } from "antd";
import { EyeOutlined, CalendarOutlined, ShopOutlined } from "@ant-design/icons";
import useOrganizationStore from "../../../store/organization";
import { MootasiReceiptsSchema } from "../schema/mootasi-receipt.schema";
import useMootasiReceiptList from "../hooks/use-mootasi-receipt-list";
import { formatToRupiah } from "../../../utils/currency";
import { formatDate, formatDateTime } from "@/utils/date";

const { Text } = Typography;

export default function MootasiReceiptsTable() {
    const { selectedOrganization } = useOrganizationStore();
    const mootasiReceiptsHooks = useMootasiReceiptList(
        selectedOrganization?.id
    );

    const columns: TableProps<MootasiReceiptsSchema>["columns"] = [
        {
            title: "Foto Nota",
            dataIndex: "image_url",
            key: "image_url",
            width: 100,
            render: (picture) => {
                if (!picture) {
                    return (
                        <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-2 border-dashed border-gray-300">
                            <EyeOutlined className="text-gray-400 text-lg" />
                        </div>
                    );
                }

                return (
                    <div className="relative group">
                        <Image
                            src={picture}
                            alt={`Nota`}
                            className="w-20 h-20 object-cover rounded-xl shadow-md border border-gray-200 transition-transform group-hover:scale-105"
                            preview={{
                                mask: (
                                    <div className="flex items-center justify-center">
                                        <EyeOutlined className="text-white text-lg" />
                                    </div>
                                )
                            }}
                        />
                    </div>
                );
            },
        },
        {
            title: "Detail Nota",
            key: "receipt_details",
            width: 200,
            render: (_, record) => (
                <div className="space-y-2">
                    <div>
                        <Text strong className="text-blue-600 text-base">
                            {record.number || "No Number"}
                        </Text>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                        <CalendarOutlined className="text-xs" />
                        <Text className="text-sm">
                            {formatDate(record.receipt_date)}
                        </Text>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                        <Text className="text-xs">
                            Upload: {formatDateTime(record.upload_date)}
                        </Text>
                    </div>
                </div>
            ),
        },
        {
            title: "Supplier",
            dataIndex: "supplier",
            key: "supplier",
            width: 180,
            render: (supplier) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <ShopOutlined className="text-white text-sm" />
                    </div>
                    <div>
                        <Text strong className="text-gray-800">
                            {supplier || "Unknown Supplier"}
                        </Text>
                    </div>
                </div>
            ),
        },
        {
            title: "Rincian Biaya",
            key: "cost_breakdown",
            width: 200,
            render: (_, record) => (
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <Text className="text-sm text-gray-600">Subtotal:</Text>
                        <Text className="text-sm font-medium">{formatToRupiah(record.subtotal)}</Text>
                    </div>
                    <div className="flex justify-between">
                        <Text className="text-sm text-gray-600">Service:</Text>
                        <Text className="text-sm">{formatToRupiah(record.service)}</Text>
                    </div>
                    <div className="flex justify-between">
                        <Text className="text-sm text-gray-600">PPN:</Text>
                        <Text className="text-sm">{formatToRupiah(record.ppn)}</Text>
                    </div>
                </div>
            ),
        },
        {
            title: "Pajak & Diskon",
            key: "tax_discount",
            width: 150,
            render: (_, record) => (
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <Text className="text-sm text-gray-600">Tax:</Text>
                        <Text className="text-sm">{formatToRupiah(record.tax)}</Text>
                    </div>
                    <div className="flex justify-between">
                        <Text className="text-sm text-gray-600">Discount:</Text>
                        <Text className="text-sm text-red-600">-{formatToRupiah(record.discount)}</Text>
                    </div>
                </div>
            ),
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
            width: 150,
            render: (value) => (
                <div className="text-right">
                    <Text className="text-white font-bold text-lg">
                        {formatToRupiah(value)}
                    </Text>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full space-y-4">
            {/* Header Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Daftar Nota Mootasi
                        </h2>
                        <p className="text-gray-600">
                            Kelola dan pantau semua nota transaksi Anda
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Tag color="blue" className="px-3 py-1 text-sm">
                            {mootasiReceiptsHooks.data?.data?.length || 0} Nota
                        </Tag>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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
                    scroll={{ x: 1200 }}
                    className="custom-table"
                    rowClassName={(record, index) =>
                        `${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`
                    }
                    locale={{
                        emptyText: (
                            <div className="py-12 text-center">
                                <div className="text-gray-400 text-lg mb-2">📄</div>
                                <Text className="text-gray-500">Belum ada data nota</Text>
                            </div>
                        )
                    }}
                />
            </div>
        </div>
    );
}