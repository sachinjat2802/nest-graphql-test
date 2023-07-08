/* eslint-disable */
import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class User extends Document {
  @Field()
  @Prop({ required: true })
  email: string;

  @Field()
  @Prop({ required: true })
  password: string;

  @Field()
  @Prop({ required: false, default: '' })
  name: string;

  @Field()
  @Prop({ required: false, default: '' })
  phone: string;

  @Field()
  @Prop({ required: false, default: '' })
  profilePic: string;

  @Field()
  @Prop({ required: false, default: '' })
  gender: string;

  @Field()
  @Prop({ required: false, default: '' })
  address: string;

  @Field()
  @Prop({ required: false, default: '' })
  city: string;

  @Field()
  @Prop({ required: false, default: '' })
  state: string;

  @Field()
  @Prop({ required: false, default: 'India' })
  country: string;

  @Field()
  @Prop({ required: false, default: '000000' })
  pincode: string;

  @Field()
  @Prop({ required: false, default: 'user' })
  role: string;

  @Field()
  @Prop({ required: false, default: 'active' })
  status: string;

  @Field()
  @Prop({ required: false, default: false })
  isDeleted: boolean;

  @Field()
  @Prop({ required: false, default: false })
  isBlocked: boolean;

  @Field()
  @Prop({ required: false, default: false })
  isVerified: boolean;

  @Field()
  @Prop({ required: false, default: false })
  isEmailVerified: boolean;

  @Field()
  @Prop({ required: false, default: false })
  isPhoneVerified: boolean;

  @Field()
  @Prop({ required: false, default: false })
  isProfileCompleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
