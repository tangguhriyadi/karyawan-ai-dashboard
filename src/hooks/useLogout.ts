"use client";

export default function useLogout() {
    const logout = () => {
        localStorage.removeItem(process.env.NEXT_PUBLIC_TOKEN_PROPERTY ?? "");
        window.location.href = process.env.NEXT_PUBLIC_LANDING_URL ?? "";
    };

    return logout;
}
