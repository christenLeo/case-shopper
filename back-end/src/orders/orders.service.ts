import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/Order.interface';

@Injectable()
export class OrdersService {
    private readonly orders: Order[] = [];

    createOrder(order: Order) {
        this.orders.push(order);
    };

    getOrders():Order[] {
        return this.orders;
    };
};