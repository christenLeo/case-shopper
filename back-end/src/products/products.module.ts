import { Module } from '@nestjs/common';
import { IdGenerator } from 'src/middlewares/IdGenerator';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    controllers: [ ProductsController ],
    providers: [ ProductsService, IdGenerator ]
})
export class ProductsModule {}
