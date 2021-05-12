import { Field, InputType } from "type-graphql";
import { Destination, Event, Venue } from "../../database/entities";

@InputType()
export class CreateEventInput {
    @Field(() => String)
    name: string

    @Field(() => String)
    category: string

    @Field(() => String, { nullable: true})
    imagePath?: string

    @Field(() => String, { nullable: true})
    description?: string

    @Field(() => Venue , { nullable: true})
    venue?: Venue

    @Field(() => Destination, { nullable: true})
    destination?: Destination


}