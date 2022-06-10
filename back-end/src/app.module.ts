import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnexModule } from 'nest-knexjs';
import { ClientsService } from './clients/clients.service';
import { ProductsService } from './products/products.service';
import { OrdersService } from './orders/orders.service';
import { ClientsController } from './clients/clients.controller';
import { OrdersController } from './orders/orders.controller';
import { ProductsController } from './products/products.controller';
import { ClientsModule } from './clients/clients.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

const configService = new ConfigService();

@Module({
  imports: [
    ClientsModule,
    OrdersModule, 
    ProductsModule, 
    ConfigModule.forRoot(
      {isGlobal: true}
    ),
    KnexModule.forRoot({
    config: {
      client: 'mysql',
      version: '5.7',
      useNullAsDefault: true,
      connection: {
        host: configService.get('DB_HOST'),
        user: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
      },
    },
  })],
  controllers: [ ClientsController, OrdersController, ProductsController],
  providers: [ ClientsService, ProductsService, OrdersService ],
})
export class AppModule {}
