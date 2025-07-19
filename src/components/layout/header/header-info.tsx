"use client";

import { Avatar, Popover } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import SettingsIcon from "@/components/icon/serttings";
import { cn } from "@/utils/cn";
import { ROUTES } from "@/configs/route.config";
import useAppLayoutStore from "../../../store/app-layout";
import useLogout from "../../../hooks/useLogout";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import useUserStore from "@/features/user/store/user"

const HeaderInfo: React.FC = () => {
    const { isHideSidebar } = useAppLayoutStore();
    const { currentUser } = useUserStore()

    const logoutHook = useLogout();

    const handleLogout = async () => {
        await logoutHook();
    };

    const userContent = (
        <div className="max-w-[280px]">
            <figure className="flex gap-3 py-5 px-[25px] rounded-lg bg-gray-normal mb-3">
                {/* {!isLoading && ( */}
                <Image
                    unoptimized
                    className="object-cover rounded-full w-[46px] h-[46px]"
                    width={46}
                    height={46}
                    src={"/profile-default.png"}
                    alt=""
                />
                {/* )} */}
                {/* {isLoading && (
                    <Skeleton.Avatar
                        active
                        style={{ width: 46, height: 46, marginRight: 15 }}
                    />
                )} */}
                <figcaption>
                    {/* {!isLoading && ( */}
                    <>
                        <h5 className="text-sm font-semibold leading-6 text-dark break-all line-clamp-1">
                            {/* {value?.full_name} */}
                            {currentUser?.full_name ?? "-"}
                        </h5>
                        <p>-</p>
                    </>
                    {/* )} */}
                    {/* {isLoading && (
                        <>
                            <Skeleton.Input
                                active
                                style={{ width: 70, height: 16 }}
                            />
                            <Skeleton.Input
                                active
                                style={{ width: 36, height: 16, marginTop: 8 }}
                            />
                        </>
                    )} */}
                </figcaption>
            </figure>
            <ul>
                <li>
                    <Link
                        className={cn(
                            "text-gray-solid inline-flex items-center py-[10px] px-3 transition-all duration-300",
                            "hover:text-accent-hover hover:bg-primary hover:bg-opacity-5 rounded-md w-full"
                        )}
                        // style={{
                        //   width: "calc(100% + 30px)",
                        // }}
                        href={ROUTES.DEFAULT}
                    >
                        <UserOutlined className="w-4 mr-4" /> Pengaturan Akun
                    </Link>
                </li>
                {/* <li>
          <Link
            className={cn(
              "text-gray-solid inline-flex items-center py-[10px] px-3 transition-all duration-300",
              "hover:pl-[22px] hover:text-accent-hover hover:bg-primary hover:bg-opacity-5",
            )}
            style={{
              width: "calc(100% + 30px)",
            }}
            href="#"
          >
            <SettingsIcon className="w-4 mr-4" /> Pengaturan
          </Link>
        </li> */}
            </ul>
            <div
                className="inline-flex items-center justify-center text-[13px] font-medium relative w-[calc(100%+30px)] h-[calc(100% + 15px)] py-[15px] px-0 cursor-pointer bg-gray-normal left-[-15px] right-[-15px] bottom-[-15px] text-gray hover:text-accent-hover"
                onClick={handleLogout}
            >
                <LogoutOutlined className="w-[15px] h-[15px] mr-2" /> Sign Out
            </div>
        </div>
    );

    if (isHideSidebar) return null;

    return (
        <div className="flex items-center py-4">
            <div>
                {/* {isLoading && <Skeleton.Avatar active style={{ width: 32, height: 32 }} />} */}
                {/* {!isLoading && ( */}
                <Popover
                    placement="bottomRight"
                    content={userContent}
                    trigger={"click"}
                >
                    <Link href="#" className="!text-primary shadow-none">
                        <Avatar
                            src={"/profile-default.png"}
                            className="!w-10 !h-10"
                        />
                    </Link>
                </Popover>
                {/* )} */}
            </div>
        </div>
    );
};

export default HeaderInfo;
