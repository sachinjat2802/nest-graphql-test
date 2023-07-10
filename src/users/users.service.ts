import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.model';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/users.create.dto';
import { UpdateUserInput } from './dto/users.update.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(input: CreateUserInput): Promise<User> {
    const user = new this.userModel(input);
    return user.save();
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email, isDeleted: false }).exec();
  }

  async updateUser(id: string, input: UpdateUserInput): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, input, { new: true }).exec();
  }

  async softDeleteUser(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (user) {
      user.isDeleted = true;
      return user.save();
    }
    return null;
  }
}
