"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function VerifyPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const token = searchParams.get("token");
        const params = new URLSearchParams(searchParams.toString());

        if (!token) {
            window.location.href = process.env.NEXT_PUBLIC_LANDING_URL ?? "";
            params.delete("token");
            params.delete("path");
        } else {
            localStorage.setItem(
                process.env.NEXT_PUBLIC_TOKEN_PROPERTY ?? "",
                decodeURIComponent(token)
            );
            params.delete("token");
            if(searchParams.get("path")){
            router.push("/" + searchParams.get("path"));
            params.delete("path");
            } else {
                router.push("/");
            }
        }
    }, [searchParams, router]);
    return <div>...</div>;
}
