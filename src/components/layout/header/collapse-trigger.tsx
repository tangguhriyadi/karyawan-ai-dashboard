"use client";

import React from "react";
import useAppLayoutStore from "@/store/app-layout";
import { ArrowLeftOutlined } from "@ant-design/icons";

const CollapsedTrigger = () => {
    const { toggleIsCollapsed, isCollapsed } = useAppLayoutStore();

    if (!isCollapsed) return null;

    return (
        <div
            onClick={() => toggleIsCollapsed()}
            style={{ transform: "translateY(175%)" }}
            className="cursor-pointer ml-[-25px] bg-white rounded-md w-6 h-6 flex justify-center text-primary-90"
        >
            <ArrowLeftOutlined className="w-4 h-4" />
        </div>
    );
};

export default CollapsedTrigger;
