import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PermissionsMiddleware } from './permissions.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
