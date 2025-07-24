import { useQuery } from "@tanstack/react-query";
import DB_TABLES from "../../../utils/db-tables";
import { TokenType } from "../../../types/token";
import { Organization } from "../../../types/organization";
import { supabase } from "../../../utils/client";

export async function getOrganizations(user_id?: number): Promise<{
    data: Organization[] | null;
    // eslint-disable-next-line
    error: any;
}> {
    const { data, error } = await supabase
        .from(DB_TABLES.ORGANIZATION)
        .select("*")
        .eq("user_id", user_id);

    if (error) {
        return { data: null, error };
    }

    return { data, error: null };
}

export default function useOrganizationList(user_id?: number) {
    return useQuery({
        queryFn: () => getOrganizations(user_id),
        queryKey: ["get-organizations"],
        enabled: !!user_id,
    });
}
