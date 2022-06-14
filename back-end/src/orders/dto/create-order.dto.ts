export interface CreateOrderDto {
    id: string,
    client_id: string,
    product_id: string,
    product_qty: number,
    total_value: number,
    deliver_date: Date,
}
