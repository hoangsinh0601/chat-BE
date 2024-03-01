import { NestFactory } from '@nestjs/core';
import { HostModule } from '@host:/host.module';

async function bootstrap() {
  const app = await NestFactory.create(HostModule);
  await app.listen(3000);
}
bootstrap();
