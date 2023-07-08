import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongodbModule } from './mongodb/mongodb.module';
import { UsersModule } from './users/users.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [MongodbModule, UsersModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
