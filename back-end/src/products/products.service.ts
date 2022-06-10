import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { Product } from './interfaces/products.interface';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel() private readonly knex: Knex
    ){};

    private readonly table: string = 'shopper_products';
    
    async getProducts():Promise<Product[]>{
        const products: Product[] = await this.knex(this.table);
        return products;
    };

    async createProduct(product: Product):Promise<void>{
        await this.knex(this.table).insert(product);
    };
}
