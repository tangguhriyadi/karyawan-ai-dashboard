"use client";

import { Table, TableProps } from "antd";
import useMootasiReceiptItemList from "../hooks/use-mootasi-receipt-items-list";
import { MootasiReceiptItemsSchema } from "../schema/mootasi-receipt-items.schema";
import useOrganizationStore from "../../../store/organization";
import { formatToRupiah } from "../../../utils/currency";

export default function MootasiReceiptItemsTable() {
    const { selectedOrganization } = useOrganizationStore();
    const mootasiReceiptItemsHooks = useMootasiReceiptItemList(
        selectedOrganization?.id
    );

    const columns: TableProps<MootasiReceiptItemsSchema>["columns"] = [
        {
            title: "Supplier",
            dataIndex: "supplier",
            key: "supplier",
        },
        {
            title: "Item",
            dataIndex: "item",
            key: "item",
        },
        {
            title: "Harga",
            dataIndex: "price",
            key: "price",
            render: (value) => {
                if (!value || value <= 0) return "-";
                const splitted = formatToRupiah(value, false);

                return (
                    <div className="w-full flex justify-between">
                        <div>Rp</div>
                        <div className="text-right">
                            {value > 0 ? splitted : "-"}
                        </div>
                    </div>
                );
            },
            align: "right",
        },
        {
            title: "Qty",
            dataIndex: "quantity",
            key: "quantity",
            align: "center",
        },
        {
            title: "Satuan",
            dataIndex: "unit",
            key: "unit",
            align: "center",
        },
        {
            title: "Subtotal",
            dataIndex: "subtotal",
            key: "subtotal",
            render: (value) => {
                if (!value || value <= 0) return "-";
                const splitted = formatToRupiah(value, false);

                return (
                    <div className="w-full flex justify-between">
                        <div>Rp</div>
                        <div className="text-right">
                            {value > 0 ? splitted : "-"}
                        </div>
                    </div>
                );
            },
            align: "right",
        },
        {
            title: "Service",
            dataIndex: "service",
            key: "service",
            render: (value) => {
                if (!value || value <= 0) return "-";
                const splitted = formatToRupiah(value, false);

                return (
                    <div className="w-full flex justify-between">
                        <div>Rp</div>
                        <div className="text-right">
                            {value > 0 ? splitted : "-"}
                        </div>
                    </div>
                );
            },
            align: "right",
        },
        {
            title: "PPN",
            dataIndex: "ppn",
            key: "ppn",
            render: (value) => {
                if (!value || value <= 0) return "-";
                const splitted = formatToRupiah(value, false);

                return (
                    <div className="w-full flex justify-between">
                        <div>Rp</div>
                        <div className="text-right">
                            {value > 0 ? splitted : "-"}
                        </div>
                    </div>
                );
            },
            align: "right",
        },
        {
            title: "Tax",
            dataIndex: "tax",
            key: "tax",
            render: (value) => {
                if (!value || value <= 0) return "-";
                const splitted = formatToRupiah(value, false);

                return (
                    <div className="w-full flex justify-between">
                        <div>Rp</div>
                        <div className="text-right">
                            {value > 0 ? splitted : "-"}
                        </div>
                    </div>
                );
            },
            align: "right",
        },
        {
            title: "Discount",
            dataIndex: "discount",
            key: "discount",
            render: (value) => {
                if (!value || value <= 0) return "-";
                const splitted = formatToRupiah(value, false);

                return (
                    <div className="w-full flex justify-between">
                        <div>Rp</div>
                        <div className="text-right">
                            {value > 0 ? splitted : "-"}
                        </div>
                    </div>
                );
            },
            align: "right",
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
            render: (value) => {
                if (!value || value <= 0) return "-";
                const splitted = formatToRupiah(value, false);

                return (
                    <div className="w-full flex justify-between text-success-50 font-semibold">
                        <div>Rp</div>
                        <div className="text-right">
                            {value > 0 ? splitted : "-"}
                        </div>
                    </div>
                );
            },
            align: "right",
        },
    ];

    return (
        <div className="w-full">
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <Table<MootasiReceiptItemsSchema>
                    dataSource={mootasiReceiptItemsHooks.data?.data || []}
                    loading={mootasiReceiptItemsHooks.isLoading}
                    columns={columns}
                    pagination={false}
                    rowKey={(row) => row.id}
                />
            </div>
        </div>
    );
}
