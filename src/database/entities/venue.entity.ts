import { Field, ID,Int, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { BaseEnity } from "./base.entity";
import { Event } from './event.entity'

@Entity('venues')
@ObjectType()
export class Venue extends BaseEnity {
    @Field(() => String)
    @Column()
    name: string

    @Field(() => String)
    @Column()
    address: String

    @Field(() => Int)
    @Column({
        name: 'postal_code'
    })
    postalCode: number
    
    @Field(() => String)
    @Column()
    town: string
  
    @Field(() => Int)
    @Column()
    phone: number

    @OneToMany('Event', 'events')
    @JoinColumn({ name: 'venue_id'})
    event: Event[]

}