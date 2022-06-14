import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { UpdateClientAddressDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {

  constructor(@InjectModel() private readonly connection: Knex){};

  private readonly table = 'shopper_clients';

  async create(client: Client):Promise<string>{
    const {id, name, email, address} = client;

    if (!id || !name || !email || !address) {
        throw new HttpException('Verify the fields: name, email and address, all of them must be filled', HttpStatus.BAD_REQUEST);
    }

    await this.connection(this.table).insert(client);
    return 'Client created';
  };

  async findAll():Promise<Client[]>{
    return await this.connection(this.table);
  };

  async findOne(id: string):Promise<Client>{
    const client: Client[] = await this.connection(this.table).where({id});

    if (!client[0]) throw new HttpException('Client not found, please check if you passed a valid client id', HttpStatus.NOT_FOUND);

    return client[0];
  };

  async updateAddress(id: string, input: UpdateClientAddressDto):Promise<string>{
    const {address} = input;

    if (!address) throw new HttpException('Please check if you have passed a address', HttpStatus.BAD_REQUEST);

    await this.connection(this.table).where({id}).update({address});
    return 'Client address updated';
  };

  async remove(id: string):Promise<string>{
    const client: Client = await this.findOne(id);

    if (!client) throw new HttpException('Client not found, please check if you passed a valid client id', HttpStatus.NOT_FOUND);

    await this.connection(this.table).where({id}).delete();
    return 'Client removed';
  };
}
