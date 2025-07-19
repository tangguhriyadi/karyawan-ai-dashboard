"use client";

import { Table, TableProps } from "antd";
import useMootasiReceiptItemList from "../hooks/use-mootasi-receipt-items-list";
import { MootasiReceiptItemsSchema } from "../schema/mootasi-receipt-items.schema";
import useOrganizationStore from "../../../store/organization";

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
        },
        {
            title: "Qty",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Satuan",
            dataIndex: "unit",
            key: "unit",
        },
        {
            title: "Subtotal",
            dataIndex: "subtotal",
            key: "subtotal",
        },
        {
            title: "Service",
            dataIndex: "service",
            key: "service",
        },
        {
            title: "PPN",
            dataIndex: "ppn",
            key: "ppn",
        },
        {
            title: "Tax",
            dataIndex: "tax",
            key: "tax",
        },
        {
            title: "Dicount",
            dataIndex: "discount",
            key: "discount",
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
        },
    ];

    return (
        <Table<MootasiReceiptItemsSchema>
            dataSource={mootasiReceiptItemsHooks.data?.data || []}
            loading={mootasiReceiptItemsHooks.isLoading}
            columns={columns}
            // pagination={{
            //     pageSize: queryParams.limit,
            //     current: data?.data.data.current_page,
            //     total: data?.data.data.total_records,
            //     onChange: (page) =>
            //         setQueryParams((prev) => ({ ...prev, page })),
            // }}
            pagination={false}
            rowKey={(row) => row.id}
        />
    );
}
