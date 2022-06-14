import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { ClientsService } from 'src/clients/clients.service';
import { Client } from 'src/clients/entities/client.entity';
import { Product } from 'src/products/interfaces/products.interface';
import { ProductsService } from 'src/products/products.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderProdQtyDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectModel() private readonly connection: Knex,
    private readonly clientsService: ClientsService,
    private readonly productsService: ProductsService
  ){};

  private readonly table = 'shopper_orders';

  async create(order: CreateOrderDto):Promise<string>{
    const {id, client_id, product_id, product_qty, total_value,deliver_date} = order;

    if (!id || !client_id || !product_id || !product_qty || !total_value || !deliver_date) {
        throw new HttpException('Verify the fields: client_id, product_id, product_qty, total_value and deliver_date, all of them must be filled', HttpStatus.BAD_REQUEST);
    }

    const client: Client = await this.clientsService.findOne(client_id);

    if (!client) throw new HttpException('Client not found, check the client id', HttpStatus.NOT_FOUND);

    const product: Product = await this.productsService.getProductById(product_id);

    if (!product) throw new HttpException('Product not found, check the product id', HttpStatus.NOT_FOUND);
    
    await this.connection(this.table).insert(order);
    return 'Order created';
  }

  async findAll():Promise<Order[]>{
    const orders: Order[] = await this.connection(this.table);
    return orders;
  }

  async findOne(id: string):Promise<Order>{
    const [order] = await this.connection(this.table).where({id});

    if (!order) throw new HttpException('Order not found, please check if you passed a valid client id', HttpStatus.NOT_FOUND);

    return order;
  }

  async updateProdQty(id: string, updateOrderProdQtyDto: UpdateOrderProdQtyDto):Promise<string>{
    const {product_qty, total_value} = updateOrderProdQtyDto;

    if (!total_value || !product_qty) throw new HttpException('Please check if you have passed a new value and product quatity', HttpStatus.BAD_REQUEST);

    await this.connection(this.table).where({id}).update({total_value, product_qty});

    return `Product quantity and total value changed`;
  }

  async remove(id: string):Promise<string>{
    const order: Order = await this.findOne(id);

    if (!order) throw new HttpException('Order not found, please check if you passed a valid client id', HttpStatus.NOT_FOUND);

    await this.connection(this.table).where({id}).delete();
    return `Order removed`;
  }
}
