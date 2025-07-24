import { Spin } from "antd";
import React from "react";

const AppLoaderMobile = () => {
  return (
    <main
      className="z-20 bg-neutral-98 rounded-[18px] !pb-4 !pt-4  block relative lg:hidden"
      style={{ height: "calc(100vh - 84px)" }}
    >
      <div className="flex justify-center items-center h-full w-full">
        <Spin size="large" />
      </div>
    </main>
  );
};

export default AppLoaderMobile;
