import { Field, ID,Int, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { BaseEnity } from "./base.entity";

@Entity('performances')
@ObjectType()
export class Performance extends BaseEnity {
    @Field(() => ID)
    @Column()
    name: string

    @Field(() => Int)
    @Column()
    starts: number

    @Field(() => Int)
    @Column()
    soldOut: number

}