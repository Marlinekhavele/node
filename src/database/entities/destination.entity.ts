import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEnity } from "./base.entity";
import { Event } from "./event.entity";

@Entity('destinations')
@ObjectType()
export class Destination extends BaseEnity {
    @Field(() => ID)
    @Column()
    name: string

    @Field(() => String)
    @Column()
    description: string

    @Field(() => String)
    @Column()
    status: string

    @OneToMany('Event', 'events')
    @JoinColumn({
        name: 'destination_id'
    })
    events: Event[]
}