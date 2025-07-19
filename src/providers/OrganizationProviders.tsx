"use client";

import { useEffect } from "react";
import useOrganizationList from "../features/organizaitons/hooks/use-organization";
import useOrganizationStore from "../store/organization";
import useUserStore from "../features/user/store/user";

export default function OrganizationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const {
        selectedOrganization,
        setSelectedOrganization,
        setIsLoadingOrganization,
        setOrganizations,
    } = useOrganizationStore();
    const { currentUser } = useUserStore();

    const { data, isLoading } = useOrganizationList(currentUser?.id);

    useEffect(() => {
        if (isLoading) {
            setIsLoadingOrganization(isLoading);
        } else {
            setIsLoadingOrganization(false);
        }
    }, [isLoading, setIsLoadingOrganization]);

    useEffect(() => {
        if (
            !selectedOrganization &&
            data &&
            data.data &&
            data.data.length > 0
        ) {
            setSelectedOrganization(data?.data[0]);
        }
    }, [selectedOrganization, setSelectedOrganization, data]);

    useEffect(() => {
        if (!isLoading && data && data.data && data.data.length > 0) {
            setOrganizations(data.data);
        }
    }, [setOrganizations, data, isLoading]);
    return <>{children}</>;
}
