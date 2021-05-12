import { InputType, Field, Int } from "type-graphql";

@InputType()
export class CreatePerformanceInput {
    @Field(() => String)
    name: string

    @Field(() => Int)
    starts: number

    @Field(() => Int)
    soldOut: number
  
  
}