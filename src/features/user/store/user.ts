"use client";
import { create } from "zustand";
import { User } from "../schema/user";

type UserStoreValue = {
    currentUser: User | null;
    isLoadingUser: boolean;
    setCurrentUser: (currentUser: User) => void;
    setIsLoadingUser: (val: boolean) => void;
};

const useUserStore = create<UserStoreValue>((set) => ({
    currentUser: null,
    isLoadingUser: false,
    setCurrentUser: (currentUser: User) => set(() => ({ currentUser })),
    setIsLoadingUser: (val: boolean) => set(() => ({ isLoadingUser: val })),
}));

export default useUserStore;
