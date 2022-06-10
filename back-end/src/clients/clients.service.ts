import { Injectable } from '@nestjs/common';
import { Client } from './interfaces/Client.interface';

@Injectable()
export class ClientsService {
    private readonly clients: Client[] = [];

    createClient(client: Client) {
        this.clients.push(client);
    };

    getClients():Client[] {
        return this.clients;
    };
};