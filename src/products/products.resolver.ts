/* eslint-disable */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreatePrOductInput } from './dto/product.create.dto';
import { UpdateProductInput } from './dto/product.update.dto';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthGuard)
  @Query((returns) => Product || {})
  async product(@Args('id') id: string) {
    return await this.productsService.getProduct(id);
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => Product)
  async createProduct(@Args('input') input: CreatePrOductInput) {
    return await this.productsService.createProduct(input);
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => Product)
  async updateProduct(
    @Args('id') id: string,
    @Args('input') input: UpdateProductInput,
  ) {
    return await this.productsService.updateProduct(id, input);
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => Product)
  async deleteProduct(@Args('id') id: string) {
    return await this.productsService.deleteProduct(id);
  }
}
