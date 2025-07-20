import { useQuery } from "@tanstack/react-query";
import { supabaseMootasi } from "../../../utils/client-2";

export async function getChatbotLink(license_id?: number): Promise<{
    data: { chatbot_link: string } | null;
    // eslint-disable-next-line
    error: any;
}> {
    const { data, error } = await supabaseMootasi
        .from("telegram_bot")
        .select("*")
        .eq("product_organization_id", license_id)
        .single();
    if (error) {
        return { data: null, error };
    }

    return { data, error: null };
}

export default function useMootasiChatbotLink(license_id?: number) {
    return useQuery({
        queryFn: () => getChatbotLink(license_id),
        queryKey: ["chatbot-link", license_id],
        enabled: !!license_id,
    });
}
