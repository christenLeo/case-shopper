import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IdGenerator } from 'src/middlewares/IdGenerator';
import { CreateProductDto } from './dto/CreateProductDto';
import { UpdateProductPriceDto, UpdateProductStockDto } from './dto/UpdateProductDto';
import { Product } from './interfaces/products.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private productsService: ProductsService,
        private idGenerator: IdGenerator
    ){};

    @Get()
    getProducts():Promise<Product[]>{
        return this.productsService.getProducts();
    };

    @Post()
    createProduct(@Body() input: CreateProductDto):string{
        const {name, price, qty_stock} = input;
        const id = this.idGenerator.generateId();

        const product: Product = {
            id,
            name,
            price,
            qty_stock
        };

        this.productsService.createProduct(product);
        return 'Product registered successfully';
    };

    @Put('stock/:id')
    updateProductStock(@Param('id') id:string, @Body() input:UpdateProductStockDto):string{
        const {qty_stock} = input;
        this.productsService.updateProductStock(id, qty_stock);
        return 'Stock quantity updated';
    };
    
    @Put('price/:id')
    updateProductPrice(@Param('id') id:string, @Body() input:UpdateProductPriceDto):string{
        const {price} = input;
        this.productsService.updateProductPrice(id, price);
        return 'Price updated';
    };

    @Delete('delete/:id')
    deleteProduct(@Param('id') id:string):string{
        this.productsService.deleteProduct(id);
        return 'Product deleted';
    };
}
