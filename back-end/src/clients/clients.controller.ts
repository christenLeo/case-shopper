import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/CreateClientDto';
import { Client } from './interfaces/Client.interface';

@Controller('clients')
export class ClientsController {
  constructor(
      private clientService: ClientsService
  ){}

  @Post()
  createClient(@Body() createClientDto: CreateClientDto):string{
    this.clientService.createClient(createClientDto);
    return 'Client registered';
  }

  @Get()
  getClients(): Client[] {
    return this.clientService.getClients();
  }
}