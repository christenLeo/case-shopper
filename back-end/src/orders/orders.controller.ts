import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderProdQtyDto } from './dto/update-order.dto';
import { IdGenerator } from 'src/middlewares/IdGenerator';
import { Order } from './entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly idGenerator: IdGenerator
  ) {}

  @Post()
  create(@Body() input: CreateOrderDto) {
    const {client_id, product_id, product_qty, total_value, deliver_date} = input;
    const id = this.idGenerator.generateId();

    const order: Order = {
      id,
      client_id,
      product_id,
      product_qty,
      total_value,
      deliver_date
    };
    
    return this.ordersService.create(order);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Put(':id')
  updateProdQty(@Param('id') id: string, @Body() updateOrderProdQtyDto: UpdateOrderProdQtyDto) {
    return this.ordersService.updateProdQty(id, updateOrderProdQtyDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}
