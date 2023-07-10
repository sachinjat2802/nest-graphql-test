/* eslint-disable */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './users.model';
import { CreateUserInput } from './dto/users.create.dto';
import { AuthService } from 'src/auth/auth.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateUserInput } from './dto/users.update.dto';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private readonly userService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard)
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

  @UseGuards(AuthGuard)
  @Mutation((returns) => User)
  async updateUser(
    @Args('id') id: string,
    @Args('input') input: UpdateUserInput,
  ): Promise<User> {
    return await this.usersService.updateUser(id, input);
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => User || null)
  async deleteUser(@Args('id') id: string): Promise<User> {
    return await this.usersService.softDeleteUser(id);
  }
}
