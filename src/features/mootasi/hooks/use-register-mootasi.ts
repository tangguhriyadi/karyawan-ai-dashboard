"use client";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const api = async (body: {
    license_id: number;
    organization_id: number;
    user_id: number;
    credentials: string;
}) => {
    return await axios.post(
        "https://n8n.motiolabs.com/webhook/mootasi/register",
        {
            product_organization_id: body.license_id,
            organization_id: body.organization_id,
            user_id: body.user_id,
            credentials: body.credentials,
        },
        {
            headers: {
                "x-n8n-api-key":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyYTA1ZTNjOS02MzM0LTRkOTItOGNiZC0wODQwN2EwZWE3YTAiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzUyNTU0NjY2fQ.DqEPnroQ1ojJWqjzQZuhZdaIAWwxlgyGc2xI-0w9pKU",
            },
        }
    );
};

export default function useRegisterMootasi() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: api,
        mutationKey: ["register-mootasi"],
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["mootasi-license"] });
            queryClient.invalidateQueries({ queryKey: ["chatbot-link"] });
        },
    });
}
