import { Field, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEnity } from "./base.entity";
import { Destination } from "./destination.entity";
import { Ticket } from "./ticket.entity";
import { Venue } from "./venue.entity";

@Entity('events')
@ObjectType()
export class Event extends BaseEnity {
    @Field(() => String)
    @Column({
        unique: true
    })
    name: string

    @Field(() => String)
    @Column()
    category: string

    @Field(() => String, { nullable: true})
    @Column({
        name: 'image_path',
        nullable: true
    })
    imagePath: string


    @Field(() => String, { nullable: true})
    @Column({
        nullable: true
    })
    description?: string

    @ManyToOne('Destination', 'destination')
    @JoinColumn({
        name: 'destination_id'
    })
    destination?: Destination 

    @ManyToOne('Venue', 'venue')
    @JoinColumn({
        name: 'venue_id'
    })
    venue?: Venue

    @OneToMany('Ticket', 'tickets')
    @JoinColumn({ name: 'event_id' })
    tickets?: Ticket[]
}