"use client";

import { Radio } from "antd";
import MootasiReceiptItemsTable from "./components/mootasi-receipt-items-table";
import { useState } from "react";
import MootasiReceiptsTable from "./components/mootasi-receipt-table";

const MootasiPage = () => {
    const [mode, setMode] = useState<string>("items");
    return (
        <div className="flex flex-col gap-y-4">
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
