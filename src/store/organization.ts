"use client";
import { create } from "zustand";
import { Organization } from "../types/organization";

type OrganizationStoreValue = {
    organizations: Organization[];
    selectedOrganization: Organization | null;
    isLoadingOrganization: boolean;
    setOrganizations: (organizations: Organization[]) => void;
    setSelectedOrganization: (selectedOrganization: Organization) => void;
    setIsLoadingOrganization: (val: boolean) => void;
};

const useOrganizationStore = create<OrganizationStoreValue>((set) => ({
    organizations: [],
    selectedOrganization: null,
    isLoadingOrganization: false,
    setOrganizations: (organizations: Organization[]) =>
        set(() => ({ organizations })),
    setSelectedOrganization: (selectedOrganization: Organization) =>
        set(() => ({ selectedOrganization })),
    setIsLoadingOrganization: (val: boolean) =>
        set(() => ({ isLoadingOrganization: val })),
}));

export default useOrganizationStore;
