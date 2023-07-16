/* eslint-disable */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './products.model';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { LocalStrategy } from 'src/auth/local.strategy';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { User, UserSchema } from 'src/users/users.model';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    ProductsService,
    ProductsResolver,
    JwtService,
    LocalStrategy,
    UsersService,
    AuthService,
    AuthGuard,
  ],
})
export class ProductsModule {}
