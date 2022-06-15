import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { IdGenerator } from 'src/middlewares/IdGenerator';
import { ClientsService } from 'src/clients/clients.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, ClientsService, ProductsService, IdGenerator]
})
export class OrdersModule {};
