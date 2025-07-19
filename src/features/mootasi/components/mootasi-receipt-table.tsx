"use client";

import { Table, TableProps, Image } from "antd";
import useOrganizationStore from "../../../store/organization";
import { MootasiReceiptsSchema } from "../schema/mootasi-receipt.schema";
import useMootasiReceiptList from "../hooks/use-mootasi-receipt-list";

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
        <Table<MootasiReceiptsSchema>
            dataSource={mootasiReceiptsHooks.data?.data || []}
            loading={mootasiReceiptsHooks.isLoading}
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
