/* eslint-disable */
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.model';
import { CreateUserInput } from 'src/users/users.create.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async registerUser(createUserDto: CreateUserInput): Promise<User> {
    const { email, password } = createUserDto;

    // Check if user with the same email already exists
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const input = { email, password: hashedPassword };
    const user = await this.usersService.createUser(input);
    return user;
  }

  async authenticateUser(email: string, password: string): Promise<any> {
    const user: any = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    console.log(user);
    const payload = { email: user.email, sub: user._id };
    const accessToken = this.jwtService.sign(payload, {
      secret: 'your-secret-key', // Replace with your secret key
    });
    console.log(accessToken);
    user.accessToken = accessToken;
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersService.findByEmail(email);
  }
}
