"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import ThemeProvider from "./ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientConfig } from "@/configs/tanstack.config";
import NotificationProvider from "./NotificationProvider";
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
                <ThemeProvider>
                    <NotificationProvider>{children}</NotificationProvider>
                </ThemeProvider>
            </AntdRegistry>
        </QueryClientProvider>
    );
}
