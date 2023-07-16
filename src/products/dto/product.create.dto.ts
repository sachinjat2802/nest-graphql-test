/*eslint-disable */
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePrOductInput {
  @Field()
  name: string;

  @Field()
  type: string;
}
