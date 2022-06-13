import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { Product } from './interfaces/products.interface';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel() private readonly connection: Knex
    ){};

    private readonly table: string = 'shopper_products';
    
    async getProducts():Promise<Product[]>{
        const products: Product[] = await this.connection(this.table);
        return products;
    };

    async createProduct(product: Product):Promise<void>{
        await this.connection(this.table).insert(product);
    };

    async updateProductStock(id:string, qty_stock:number):Promise<void>{
        await this.connection(this.table).where({id}).update({qty_stock});
    };

    async updateProductPrice(id:string, price:number):Promise<void>{
        await this.connection(this.table).where({id}).update({price});
    };

    async deleteProduct(id: string){
        await this.connection(this.table).where({id}).delete();
    };
}
