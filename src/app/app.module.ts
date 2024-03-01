import { AppService } from './services/app.service';
import { CoreModule } from '@core/core.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
