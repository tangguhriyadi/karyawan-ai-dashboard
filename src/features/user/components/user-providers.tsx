"use client";

import { useEffect } from "react";
import useUserStore from "../store/user";
import useCurrentUser from "../hooks/use-current-user";

export default function UserProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { setCurrentUser, setIsLoadingUser, isLoadingUser } = useUserStore();

    const { data, isLoading } = useCurrentUser();

    useEffect(() => {
        if (isLoading) {
            setIsLoadingUser(isLoading);
        } else {
            setIsLoadingUser(false);
        }
    }, [isLoading, setIsLoadingUser]);

    useEffect(() => {
        if (!isLoading && data && data.data) {
            setCurrentUser(data.data);
        }
    }, [setCurrentUser, data, isLoading]);
    if (isLoadingUser) {
        return null;
    }
    return <>{children}</>;
}
