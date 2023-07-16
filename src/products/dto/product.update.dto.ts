/*eslint-disable */
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field()
  name?: string;

  @Field()
  type?: string;

  @Field()
  price?: string;

  @Field()
  image?: string;

  @Field()
  description?: string;

  @Field()
  rating?: string;

  @Field()
  category?: string;

  @Field()
  status?: string;
}
