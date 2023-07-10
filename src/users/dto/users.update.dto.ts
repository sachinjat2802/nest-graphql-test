/*eslint-disable */
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  profilePic?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  pincode?: string;

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  isDeleted?: boolean;

  @Field({ nullable: true })
  isBlocked?: boolean;

  @Field({ nullable: true })
  isVerified?: boolean;

  @Field({ nullable: true })
  isEmailVerified?: boolean;

  @Field({ nullable: true })
  isPhoneVerified?: boolean;

  @Field({ nullable: true })
  isProfileCompleted?: boolean;
}
