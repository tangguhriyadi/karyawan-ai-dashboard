import { useQuery } from "@tanstack/react-query";
import DB_TABLES from "../../../utils/db-tables";
import { TokenType } from "../../../types/token";
import { supabase } from "../../../utils/client";
import { User } from "../schema/user";

export async function getCurrentUser(): Promise<{
    data: User | null;
    // eslint-disable-next-line
    error: any;
}> {
    const token = localStorage.getItem(
        process.env.NEXT_PUBLIC_TOKEN_PROPERTY ?? ""
    );

    const parsedToken = JSON.parse(token!) as TokenType;

    const { data, error } = await supabase
        .from(DB_TABLES.USERS)
        .select("*")
        .eq("auth_id", parsedToken.user.id)
        .single();

    if (error) {
        return { data: null, error };
    }

    return { data, error: null };
}

export default function useCurrentUser() {
    return useQuery({
        queryFn: getCurrentUser,
        queryKey: ["get-current-user"],
    });
}
