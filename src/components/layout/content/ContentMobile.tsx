"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { useResponsive } from "../../../hooks/use-responsive";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentMobile: React.FC<ContentLayoutProps> = ({ children }) => {
  const { isDesktop } = useResponsive();

  if (isDesktop) return null;

  return (
    <main
      className={cn(
        "overflow-y-hidden overflow-x-hidden transition-all duration-300 bg-neutral-98 rounded-[18px] !pb-4 !pt-4 lg:hidden !px-1",
        "!ml-0",
      )}
      style={{ width: "calc(100vw - 8px)" }}
    >
      <div
        style={{ maxHeight: "calc(100vh - 96px)" }}
        className="pl-4 pr-2 pb-2 h-full overflow-y-auto overflow-x-hidden main-scroll"
      >
        {children}
      </div>
    </main>
  );
};

export default ContentMobile;
