import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as passport from 'passport';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(passport.initialize());
  await app.listen(process.env.PORT);
}
bootstrap();
