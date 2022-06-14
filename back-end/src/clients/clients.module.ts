import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { IdGenerator } from 'src/middlewares/IdGenerator';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, IdGenerator]
})
export class ClientsModule {}
