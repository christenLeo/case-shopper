import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/products.interface';

@Injectable()
export class ProductsService {
    constructor(
        private readonly products: Product[] = []
    ){};

    getProducts():Product[]{
        return this.products;
    };

    createProduct(product: Product){
        this.products.push(product);
    };
}
