"use client";

import React, { useMemo } from "react";
import { Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { MENU_CONFIG } from "@/configs/menu.config";
import Sider from "antd/es/layout/Sider";
import { cn } from "@/utils/cn";
import { ROUTES } from "@/configs/route.config";
import useAppLayoutStore from "@/store/app-layout";
import { MenuOutlined } from "@ant-design/icons";
import { useResponsive } from "../../../hooks/use-responsive";
import BrandIcon from "@/components/branding/BrandIcon";

const Sidebar: React.FC = () => {
    const {
        isCollapsed,
        isHideSidebar,
        toggleIsCollapsed,
        toggleIsMobileCollapsed,
    } = useAppLayoutStore();
    const { isDesktop } = useResponsive();

    const router = useRouter();
    const pathname = usePathname();

    const selectedKey = useMemo(() => {
        if (pathname === "/") return "/";
        if (pathname === ROUTES.DEFAULT) return ROUTES.DEFAULT;
        return pathname;
    }, [pathname]);

    if (isHideSidebar) return null;

    return (
        <Sider
            trigger={null}
            className="sider-scroll h-screen overflow-y-auto hidden lg:block !bg-white absolute left-0 z-30 p-[15px]"
            collapsible
            collapsed={isCollapsed}
            color="primary"
            width={280}
            collapsedWidth={80}
        >
            <div className="relative overflow-hidden w-full h-full">
                <div
                    className={cn(
                        "absolute inset-0 overflow-y-auto overflow-x-hidden sider-scroll"
                    )}
                >
                    {/* Brand Section */}
                    <div
                        className={cn(
                            "flex items-center mb-6 pb-4 border-b border-gray-100",
                            isCollapsed ? "flex-col justify-center gap-4" : "justify-between px-2"
                        )}
                    >
                        {/* Brand Logo and Text */}
                        <div
                            className={cn(
                                "flex items-center cursor-pointer hover:opacity-80 transition-all duration-200 group",
                                isCollapsed ? "flex-col gap-2" : "flex-row gap-3"
                            )}
                            onClick={() => router.push("/")}
                        >
                            <BrandIcon
                                useSmallLogo={isCollapsed}
                                className={cn(
                                    "transition-transform duration-200 group-hover:scale-105",
                                )}
                            />
                        </div>

                        {/* Menu Toggle Button */}
                        <div
                            className={cn(
                                "h-9 w-9 rounded-lg bg-gray-50 border border-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 hover:shadow-sm",
                                isCollapsed ? "mt-0" : "flex-shrink-0"
                            )}
                            onClick={() => {
                                if (isDesktop) {
                                    toggleIsCollapsed();
                                } else {
                                    toggleIsMobileCollapsed();
                                }
                            }}
                        >
                            <MenuOutlined className="text-gray-600 text-sm" />
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <Menu
                        className="p-0 border-none"
                        mode="inline"
                        defaultSelectedKeys={[selectedKey]}
                        items={MENU_CONFIG.map((menu) => ({
                            key: menu.key,
                            icon: isCollapsed ? (
                                <div>
                                    {menu.extraDummy}
                                    {menu.icon}
                                </div>
                            ) : (
                                menu.icon
                            ),
                            label: menu.label,
                            className: "step-" + menu.module,
                            extra: menu.extra,
                            children: menu.subMenu?.map((sub) => ({
                                key: sub.key,
                                label: sub.label,
                            })),
                        }))}
                        onClick={({ key }) => {
                            router.push(key.toString());
                        }}
                        selectedKeys={[selectedKey]}
                    />
                </div>
            </div>
        </Sider>
    );
};

export default Sidebar;