/* eslint-disable */

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './users.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './users.create.dto';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}
  @Query((returns) => User || {})
  async user(@Args('email') email: string) {
    console.log('working', email);
    const data = (await this.userService.getUserByEmail(email)) ?? {};
    return data;
  }
  @Mutation((returns) => User)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    const newUser = await this.userService.createUser(input);
    return newUser;
  }
}
