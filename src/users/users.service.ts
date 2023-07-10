import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.model';
import { Model } from 'mongoose';
import { CreateUserInput } from './users.create.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(input: CreateUserInput): Promise<User> {
    const user = new this.userModel(input);
    return user.save();
  }

  async findByEmail(email: string): Promise<User> {
    console.log('working', email);
    return this.userModel.findOne({ email }).exec();
  }
}
