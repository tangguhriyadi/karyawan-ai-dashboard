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
