import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/CreateProductDto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private productsService: ProductsService
    ){};

    @Get()
    getProducts(){
        return this.productsService.getProducts();
    };

    @Post()
    createProduct(@Body() product: CreateProductDto){
        this.productsService.createProduct(product);
        return 'Product registered successfully';
    };
}
