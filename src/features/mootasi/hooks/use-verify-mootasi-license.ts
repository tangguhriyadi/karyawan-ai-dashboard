"use client";

import { useQuery } from "@tanstack/react-query";
import useOrganizationStore from "../../../store/organization";
import { supabase } from "../../../utils/client";
import { ProductLicense } from "../../../types/license";

const getMootasiLicense = async (
    org_id?: number
): Promise<{
    data: ProductLicense[] | null;
    // eslint-disable-next-line
    error: any;
}> => {
    // const productId = supabase
    //     .from(DB_TABLES.PRODUCTS)
    //     .select("id")
    //     .eq("code", "MOOTASI")
    //     .single();
    const { data, error } = await supabase.rpc("get_mootasi_license", {
        org_id,
    });

    if (error) {
        return { data: null, error };
    }

    return { data, error: null };
};

export default function useVerifyMootasiLicense() {
    const { selectedOrganization } = useOrganizationStore();
    // const { currentUser } = useUserStore();

    return useQuery({
        queryFn: () => getMootasiLicense(selectedOrganization?.id),
        queryKey: ["mootasi-license"],
        enabled: !!selectedOrganization?.id,
    });
}
