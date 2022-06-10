import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { Order } from './interfaces/Order.interface';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(
        private ordersService: OrdersService
    ){}

    @Post()
        createOrder(@Body() createOrderDto: CreateOrderDto):string{
        this.ordersService.createOrder(createOrderDto);
        return 'Order registered';
    }

    @Get()
        getOrders(): Order[] {
        return this.ordersService.getOrders();
    }
}
