export type MootasiReceiptItemsSchema = {
    id: string
    created_at: string
    receipt_id: string
    item: string
    type: string
    quantity: number
    unit: number
    price: number
    subtotal: number
    service: number
    total: number
    ppn : number
    discount: number
    tax :number
    
}