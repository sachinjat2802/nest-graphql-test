import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.model';
import { UserResolver } from './users.resolver';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth.guard';
import { LocalStrategy } from 'src/auth/local.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    UsersService,
    AuthService,
    UserResolver,
    JwtService,
    LocalStrategy,
    AuthGuard,
  ],
})
export class UsersModule {}
