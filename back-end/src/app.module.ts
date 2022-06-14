import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnexModule } from 'nest-knexjs';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { IdGenerator } from './middlewares/IdGenerator';

const configService = new ConfigService();

@Module({
  imports: [ 
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
  controllers: [ ProductsController],
  providers: [ ProductsService, IdGenerator ],
})
export class AppModule {}
