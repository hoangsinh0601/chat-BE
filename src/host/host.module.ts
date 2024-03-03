import { AppModule } from '@app/app.module';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { WsRoomsGateway } from './wsGateways/rooms.gateway';

@Module({
  imports: [AppModule],
  controllers: [AppController],
  providers: [WsRoomsGateway],
})
export class HostModule {}
