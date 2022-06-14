import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { IdGenerator } from 'src/middlewares/IdGenerator';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly clientsService: ClientsService,
    private readonly idGenerator: IdGenerator
  ) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    const {name, email, address} = createClientDto;
    const id: string = this.idGenerator.generateId();

    const client: Client = {
      id,
      name,
      email,
      address
    };

    return this.clientsService.create(client);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }

  @Put(':id')
  updateAddress(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
