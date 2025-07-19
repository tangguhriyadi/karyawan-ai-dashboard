"use client";

import dynamic from "next/dynamic";

const VerifyPage = dynamic(() => import("@/features/verify/verify.page"), {
    ssr: false,
});

export default function Page() {
    return <VerifyPage />;
}
