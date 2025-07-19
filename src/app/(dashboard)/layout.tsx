// "use client";
// import { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import ProtectedProvider from "../../providers/ProtectedProvider";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <MainLayout>
            <ProtectedProvider>{children}</ProtectedProvider>
        </MainLayout>
    );
}
