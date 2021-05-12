import { InputType, Field } from "type-graphql";

@InputType()
export class CreateDestinationInput {
    @Field(() => String)
    name: string

    @Field(() => String)
    description: string

    @Field(() => String)
    status: string
}