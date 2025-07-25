import React from "react";
import { Bot } from "lucide-react";
import HeaderInfo from "./header-info";
import Link from "next/link";
import { ROUTES } from "@/configs/route.config";
import RightSideHeader from "./right-side-header";
import CollapsedTriggerReponseive from "./collapse-trigger-mobile";

const Header: React.FC = () => {
    return (
        <header className="!w-full bg-white flex gap-x-6 items-center justify-between h-[64px] max-h-[64px] px-[15px] z-20 shadow-[0px_2px_30px_rgba(146,153,184,0.063)]">
            <div className="flex w-full relative items-center gap-x-2">
                <CollapsedTriggerReponseive />
                <Link
                    href={ROUTES.DEFAULT}
                    className="flex items-center gap-x-3"
                >
                    {/* <Image
            src="/dashboard-logo.png"
            width={76.69}
            height={32}
            alt="logo"
            style={{
              cursor: "pointer",
              height: "auto",
            }}
            priority
            className="min-w-[76.69px] !h-[32px]"
          /> */}
                    <Bot className="h-10 w-10 text-blue-600" />
                    <div className="text-2xl font-bold text-black">Karyawan AI</div>
                </Link>
                {/* <CollapsedTrigger /> */}
                {/* <SearchBar /> */}
            </div>
            <div className="flex gap-x-4 items-center">
                {/* <StoreButton /> */}
                {/* <Messages /> */}
                <HeaderInfo />
                <RightSideHeader />
            </div>
        </header>
    );
};

export default Header;
