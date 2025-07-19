"use client";

import { useEffect } from "react";
import OrganizationProvider from "./OrganizationProviders";
import UserProvider from "../features/user/components/user-providers";

export default function ProtectedProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const token = localStorage.getItem(
            process.env.NEXT_PUBLIC_TOKEN_PROPERTY ?? ""
        );

        if (!token) {
            window.location.href = process.env.NEXT_PUBLIC_LANDING_URL ?? "";
        }
    }, []);

    return (
        <UserProvider>
            <OrganizationProvider>{children}</OrganizationProvider>
        </UserProvider>
    );
}
