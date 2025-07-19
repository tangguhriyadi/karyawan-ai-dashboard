"use client";
import { BreadcrumbProps } from "antd";
import { create } from "zustand";

type AppLayoutStoreValue = {
  isCollapsed: boolean;
  isMobileCollapsed: boolean;
  isHideSidebar: boolean;
  setIsHideSidebar: (val: boolean) => void;
  toggleIsCollapsed: () => void;
  setIsCollapsed: (val: boolean) => void;
  toggleIsMobileCollapsed: () => void;
  setIsMobileCollapsed: (val: boolean) => void;
  breadcrumbItems: BreadcrumbProps["items"];
  setBreadcrumbItems: (items: BreadcrumbProps["items"]) => void;
  RightButton: React.ReactNode;
  setRightButton: (RightButton: React.ReactNode) => void;
};

const useAppLayoutStore = create<AppLayoutStoreValue>((set) => ({
  isCollapsed: false,
  isMobileCollapsed: true,
  isHideSidebar: false,
  setIsHideSidebar: (val: boolean) => set(() => ({ isHideSidebar: val })),
  toggleIsCollapsed: () => set((prev) => ({ isCollapsed: !prev.isCollapsed })),
  setIsCollapsed: (val: boolean) => set(() => ({ isCollapsed: val })),
  setIsMobileCollapsed: (val: boolean) =>
    set(() => ({ isMobileCollapsed: val })),
  toggleIsMobileCollapsed: () =>
    set((prev) => ({ isMobileCollapsed: !prev.isMobileCollapsed })),
  breadcrumbItems: [],
  setBreadcrumbItems: (items) => set(() => ({ breadcrumbItems: items })),
  RightButton: null,
  setRightButton: (RightButton) => set(() => ({ RightButton })),
}));

export default useAppLayoutStore;
