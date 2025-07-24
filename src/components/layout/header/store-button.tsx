"use client";

import Link from "next/link";
import React from "react";
import { ROUTES } from "@/configs/route.config";
import { ShopOutlined } from "@ant-design/icons";

const StoreButton = () => {
    return (
        <Link
            href={ROUTES.DEFAULT}
            className="flex gap-2 items-center px-3 h-8 bg-surface-2 !text-black w-fit text-sm rounded-[99px] min-w-[120px]"
        >
            <ShopOutlined className="!text-[20px] !w-5 !h-5" />
            <div className="font-semibold text-sm ">Lihat toko</div>
        </Link>
    );
};

export default StoreButton;
