"use client";

import React from "react";
import useAppLayoutStore from "../../../store/app-layout";

const RightSideHeader = () => {
  const { RightButton, isHideSidebar } = useAppLayoutStore();
  if (!isHideSidebar) return null;
  if (!RightButton) return null;
  return <>{RightButton}</>;
};

export default RightSideHeader;
