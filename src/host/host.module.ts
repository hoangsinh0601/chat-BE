import { WsAppGateway } from './wsGateways/app.gateway';
import { AppModule } from '@app/app.module';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';

@Module({
  imports: [AppModule],
  controllers: [AppController],
  providers: [WsAppGateway],
})
export class HostModule {}
