import { Spin } from "antd";
import React from "react";

const AppLoader = () => {
  return (
    <main
      className="z-20 bg-neutral-98 rounded-[18px] !pb-4 !pt-4 hidden lg:relative lg:block"
      style={{ height: "calc(100vh - 72px)" }}
    >
      <div className="flex justify-center items-center h-full w-full">
        <Spin size="large" />
      </div>
    </main>
  );
};

export default AppLoader;
