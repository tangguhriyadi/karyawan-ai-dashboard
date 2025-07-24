"use client";

import React from "react";
import { useResponsive } from "../../../hooks/use-responsive";
import dynamic from "next/dynamic";
import AppLoader from "./AppLoader";
import AppLoaderMobile from "./AppLoaderMobile";
const Content = dynamic(() => import("./Content"), {
  ssr: false,
  loading: () => <AppLoader />,
});
const ContentMobile = dynamic(() => import("./ContentMobile"), {
  ssr: false,
  loading: () => <AppLoaderMobile />,
});

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const { isDesktop } = useResponsive();

  if (isDesktop) {
    return <Content>{children}</Content>;
  } else {
    return <ContentMobile>{children}</ContentMobile>;
  }
};

export default MainContent;
