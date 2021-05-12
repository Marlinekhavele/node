import { Field, ID,Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEnity } from "./base.entity";
import { Event } from './event.entity'

@Entity('tickets')
@ObjectType()
export class Ticket extends BaseEnity {
    @Field(() => ID)
    @Column()
    type: string

    @Field(() => Int)
    @Column()
    maxPrice: number

    @Field(() => Int)
    @Column()
    minPrice: number
  
    @Field(() => Int)
    @Column()
    currency: number

    @ManyToOne('Event', 'event')
    @JoinColumn({
      name: 'event_id'
    })
    event: Event
}