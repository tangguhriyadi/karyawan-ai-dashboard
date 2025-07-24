"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const api = async (body: { org_id: number }) => {
    return await axios.post(
        "https://n8n.motiolabs.com/webhook/mootasi/export-excel",
        {
            organization_id: body.org_id,
        },
        {
            headers: {
                "x-n8n-api-key":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyYTA1ZTNjOS02MzM0LTRkOTItOGNiZC0wODQwN2EwZWE3YTAiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzUyNTU0NjY2fQ.DqEPnroQ1ojJWqjzQZuhZdaIAWwxlgyGc2xI-0w9pKU",
                accept: "text/plain",
            },
            responseType: "blob",
        }
    );
};

export default function useDownloadExcelReceiptItems() {
    return useMutation({
        mutationFn: api,
        mutationKey: ["download-excel"],
    });
}
