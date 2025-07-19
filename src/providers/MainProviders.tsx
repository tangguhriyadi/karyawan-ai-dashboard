"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import ThemeProvider from "./ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientConfig } from "@/configs/tanstack.config";
// import { App } from "antd";
// import ModalDialogProvider from "./modal-dialog.provider";

export default function MainProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <QueryClientProvider client={queryClientConfig}>
            <AntdRegistry>
                <ThemeProvider>{children}</ThemeProvider>
            </AntdRegistry>
        </QueryClientProvider>
    );
}
