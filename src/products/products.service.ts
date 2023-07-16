import { Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePrOductInput } from './dto/product.create.dto';
import { UpdateProductInput } from './dto/product.update.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<Product>,
  ) {}

  async getProduct(id: string): Promise<Product> {
    return this.ProductModel.findById(id).exec();
  }

  async createProduct(input: CreatePrOductInput): Promise<Product> {
    const product = new this.ProductModel(input);
    return product.save();
  }

  async updateProduct(id: string, input: UpdateProductInput): Promise<Product> {
    const product = new this.ProductModel(input);
    return product.updateOne({ id }, input).exec();
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.ProductModel.findByIdAndDelete(id).exec();
  }
}
