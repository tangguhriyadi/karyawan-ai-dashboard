"use client";

import React from "react";
import useAppLayoutStore from "@/store/app-layout";
// import { useResponsive } from "../../../hooks/use-responsive";
import { MenuOutlined } from "@ant-design/icons";

const CollapsedTriggerReponseive = () => {
  const { toggleIsMobileCollapsed } = useAppLayoutStore();

//   const { isDesktop } = useResponsive();

//   if (isDesktop) return null;

  return (
    <div
      className="h-10 w-10 rounded-[10px] bg-neutral-98 flex justify-center items-center cursor-pointer mr-3 lg:!hidden"
      onClick={() => toggleIsMobileCollapsed()}
    >
      <MenuOutlined />
    </div>
  );
};

export default CollapsedTriggerReponseive;
