import { InputType, Field, Int } from "type-graphql";

@InputType()
export class CreateVenueInput {
    @Field(() => String)
    name: string

    @Field(() => String)
    address: string

    @Field(() => Int)
    postalCode: number
  
    @Field(() => String)
    town: string

  
    @Field(() => Int)
    phone: number
}