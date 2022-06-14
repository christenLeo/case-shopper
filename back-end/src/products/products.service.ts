import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    async getProductById(id:string):Promise<Product>{
        const product: Product[] = await this.connection(this.table).where({id});

        if (!product[0]) throw new HttpException('Product not found, please check if you passed a valid product id', HttpStatus.NOT_FOUND);

        return product[0];
    };

    async createProduct(product: Product):Promise<string>{
        const {id, name, price, qty_stock, img_url} = product;

        if (!id || !name || !price || !qty_stock || !img_url) {
            throw new HttpException('Verify the fields: name, price, qty_stock and img_url, all of them must be filled', HttpStatus.BAD_REQUEST);
        }

        await this.connection(this.table).insert(product);
        return 'Product created';
    };

    async updateProductStock(id:string, qty_stock:number):Promise<string>{
        await this.connection(this.table).where({id}).update({qty_stock});
        return 'Stock updated';
    };

    async updateProductPrice(id:string, price:number):Promise<string>{
        await this.connection(this.table).where({id}).update({price});
        return 'Price update';
    };

    async deleteProduct(id: string):Promise<string>{
        const product: Product = await this.getProductById(id);

        if (!product) {
            throw new HttpException('Product not found, please check if you passed a valid product id', HttpStatus.NOT_FOUND);
        }    
        
        await this.connection(this.table).where({id}).delete();
        return 'Product deleted';
    };
}
