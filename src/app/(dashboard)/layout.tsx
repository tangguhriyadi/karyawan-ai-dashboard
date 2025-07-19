"use client";
import { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        const token = localStorage.getItem(
            process.env.NEXT_PUBLIC_TOKEN_PROPERTY ?? ""
        );

        if (!token) {
            window.location.href = process.env.NEXT_PUBLIC_LANDING_URL ?? "";
        }
    }, []);
    return <MainLayout>{children}</MainLayout>;
}
