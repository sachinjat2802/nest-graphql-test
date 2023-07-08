import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

class App {
  public static async main(port) {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
  }
}

App.main(process.env.PORT);
