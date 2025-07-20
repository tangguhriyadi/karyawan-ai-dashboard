import { useQuery } from "@tanstack/react-query";
import { supabaseMootasi } from "../../../utils/client-2";
import { MootasiReceiptsSchema } from "../schema/mootasi-receipt.schema";

export async function getReceipts(org_id?: number): Promise<{
    data: MootasiReceiptsSchema[] | null;
    // eslint-disable-next-line
    error: any;
}> {
    const { data, error } = await supabaseMootasi.rpc(
        "get_receipts_by_org",
        { org_id: org_id }
    );
    if (error) {
        return { data: null, error };
    }

    return { data, error: null };
}

export default function useMootasiReceiptList(org_id?: number) {
    return useQuery({
        queryFn: () => getReceipts(org_id),
        queryKey: ["mootasi-receipts", org_id],
        enabled: !!org_id,
    });
}
