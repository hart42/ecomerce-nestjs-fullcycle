export enum OrderStatus {
    PENDING = 'pending',
    PAID = 'paid',
    FAILED = 'failed',
}

export class Order {
    id: string;

    total: number;

    client_id: number;

    status: OrderStatus = OrderStatus.PENDING;

    created_at: Date;
}


export class OrderItem {
    id: number;

    
}