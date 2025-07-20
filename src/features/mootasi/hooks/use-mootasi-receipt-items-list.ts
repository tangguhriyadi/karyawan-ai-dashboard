import { useQuery } from "@tanstack/react-query";
import { MootasiReceiptItemsSchema } from "../schema/mootasi-receipt-items.schema";
import { supabaseMootasi } from "../../../utils/client-2";

export async function getReceiptItems(org_id?: number): Promise<{
    data: MootasiReceiptItemsSchema[] | null;
    // eslint-disable-next-line
    error: any;
}> {
    const { data, error } = await supabaseMootasi.rpc(
        "get_receipt_items_by_org",
        { org_id: org_id }
    );
    if (error) {
        return { data: null, error };
    }

    return { data, error: null };
}

export default function useMootasiReceiptItemList(org_id?: number) {
    return useQuery({
        queryFn: () => getReceiptItems(org_id),
        queryKey: ["mootasi-receipt-items", org_id],
        enabled: !!org_id,
    });
}
