import { InputType, Field, Int } from "type-graphql";

@InputType()
export class CreateTicketInput {
    @Field(() => String)
    type: string

    @Field(() => Int)
    maxPrice: number

    @Field(() => Int)
    minPrice: number
  
    @Field(() => Int)
    currency: number
}