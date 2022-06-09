import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsService } from './clients/clients.service';
import { ProductsService } from './products/products.service';
import { OrdersService } from './orders/orders.service';
import { ClientsController } from './clients/clients.controller';
import { OrdersController } from './orders/orders.controller';
import { ProductsController } from './products/products.controller';
import { ClientsModule } from './clients/clients.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ClientsModule, OrdersModule, ProductsModule],
  controllers: [AppController, ClientsController, OrdersController, ProductsController],
  providers: [AppService, ClientsService, ProductsService, OrdersService],
})
export class AppModule {}
