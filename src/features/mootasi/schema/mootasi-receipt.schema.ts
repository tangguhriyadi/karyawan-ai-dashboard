export type MootasiReceiptsSchema = {
    id: string;
    created_at: string;
    supplier: string;
    receipt_date: string;
    upload_date: string;
    uploaded_by: string;
    subtotal: number;
    service: number;
    total: number;
    ppn: number;
    discount: number;
    tax: number;
    image_url: string;
    organization_id: string;
    number: string;
};
