"use client";

import { Input } from "antd";
import React from "react";
import useAppLayoutStore from "@/store/app-layout";

const SearchBar = () => {
    const { isHideSidebar } = useAppLayoutStore();

    return (
        <div className="grow">
            {isHideSidebar ? (
                <div className="ml-6"></div>
            ) : (
                <Input
                    variant="borderless"
                    allowClear
                    className="!rounded-full w-full grow !h-[36px] !ml-[36px] !bg-surface-2 !py-0 max-w-[384px]"
                    placeholder="Pencarian"
                />
            )}
        </div>
    );
};

export default SearchBar;
