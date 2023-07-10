/* eslint-disable */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './users.model';
import { CreateUserInput } from './users.create.dto';
import { AuthService } from 'src/auth/auth.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Query((returns) => User || {})
  async user(@Args('email') email: string) {
    console.log('working', email);
    const data = (await this.userService.findByEmail(email)) ?? {};
    return data;
  }

  @Mutation((returns) => User)
  async registerUser(@Args('input') input: CreateUserInput): Promise<User> {
    return await this.userService.registerUser(input);
  }

  @Mutation((returns) => User)
  async loginUser(@Args('input') input: CreateUserInput): Promise<User | null> {
    return await this.userService.authenticateUser(input.email, input.password);
  }
}
