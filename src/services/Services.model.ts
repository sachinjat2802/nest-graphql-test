/* eslint-disable */
import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Services extends Document {
  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  type: string;

  @Field()
  @Prop({ required: false, default: '' })
  price?: string;

  @Field()
  @Prop({ required: false, default: '' })
  image?: string;

  @Field()
  @Prop({ required: false, default: '' })
  description?: string;

  @Field()
  @Prop({ required: false, default: '' })
  rating?: string;

  @Field()
  @Prop({ required: false, default: '' })
  category?: string;

  @Field()
  @Prop({ required: false, default: '' })
  status?: string;

  @Field()
  @Prop({ required: false, default: false })
  isDeleted?: boolean;
}

export const ServicesSchema = SchemaFactory.createForClass(Services);
