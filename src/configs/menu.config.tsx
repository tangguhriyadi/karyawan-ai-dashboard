import { ShopOutlined } from "@ant-design/icons";
import { ROUTES } from "./route.config";
import React from "react";

interface IMenuConfig {
    key: string;
    icon?: React.ReactNode;
    label: string;
    module?: string;
    subMenu?: Omit<IMenuConfig, "subMenu">[];
    extra?: React.ReactNode;
    extraDummy?: React.ReactNode;
}

export const MENU_CONFIG: IMenuConfig[] = [
    {
        key: ROUTES.DEFAULT,
        icon: <ShopOutlined />,
        label: "Beranda",
        module: "Dashboard",
    },
    {
        key: ROUTES.MOOTASI.BASE,
        icon: <ShopOutlined />,
        label: "Mootasi",
        module: "Mootasi",
    },
];
