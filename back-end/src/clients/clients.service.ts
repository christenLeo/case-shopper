import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {

  constructor(@InjectModel() private readonly connection: Knex){};

  private readonly table = 'shopper_clients';

  async create(client: Client) {
    const {id, name, email, address} = client;

    if (!id || !name || !email || !address) {
        throw new HttpException('Verify the fields: name, price, email and address, all of them must be filled', HttpStatus.BAD_REQUEST);
    }

    return await this.connection(this.table).insert(client);
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
