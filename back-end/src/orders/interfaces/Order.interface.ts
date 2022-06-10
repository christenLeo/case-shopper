export interface Order {
    id: string,
    user_id: string,
    product_id: string,
    product_qty: number,
    total_value: number,
    deliver_date: string
};