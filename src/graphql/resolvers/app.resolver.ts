import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Destination, Event, Performance, Venue, Ticket } from "../../database/entities";
import { AppService } from "../../services/app.service";
import { CreateDestinationInput } from "../inputs/create-destination.input";
import { CreateEventInput } from "../inputs/create-event.input";
import { CreatePerformanceInput } from "../inputs/create-performance.input";
import { CreateVenueInput } from "../inputs/create-venue.input";
import { CreateTicketInput } from "../inputs/create-ticket.input";




@Resolver()
export class AppResolver {
    constructor(
        private readonly appService: AppService
    ) {}


    @Query(() => [Destination], {description: 'All destinations can be fetched through this query'})
    async destinations() {
        const result = await this.appService.allDestinations()
        return result
    }

    @Mutation(() => Destination, { description: 'Mutation to create a new destination'})
    async createDestination(@Arg('input')input: CreateDestinationInput) {
        const destination = await this.appService.createDestination(input)
        return destination;
    }
    
    // event logic

    @Query(() => [Event])
    async events() {
        const events = await this.appService.allEvents()

        return events;
    }

    @Mutation(() => Event)
    async createEvent(@Arg('input')input: CreateEventInput) {
        const event = await this.appService.createEvent(input)
        return event
    }

    // performance
     @Query(() => [Performance])
    async performance() {
        const performance = await this.appService.allPerformances()

        return performance;
    }

    @Mutation(() => Performance)
    async createPerformance(@Arg('input')input: CreatePerformanceInput) {
        const performance = await this.appService.createPerformance(input)
        return performance
    }
    // venue
     @Query(() => [Venue])
    async venue() {
        const venue = await this.appService.allVenues()

        return venue;
    }

    @Mutation(() => Venue)
    async createVenue(@Arg('input')input: CreateVenueInput) {
        const venue = await this.appService.createVenue(input)
        return venue
    }

    //ticket

    @Query(() => [Ticket])
    async tickets() {
        const tickets = await this.appService.allTickets()

        return tickets;
    }

    @Mutation(() => Ticket)
    async createTicket(@Arg('input')input: CreateTicketInput) {
        const ticket = await this.appService.createTicket(input)
        return ticket
    }
}