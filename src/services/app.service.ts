import { Repository } from "typeorm";
import { Venue, Destination, Event, Ticket, Performance } from "../database/entities";
import { CreateDestinationInput } from "../graphql/inputs/create-destination.input";
import { CreateEventInput } from "../graphql/inputs/create-event.input";
import { CreateVenueInput } from "../graphql/inputs/create-venue.input";
import { CreateTicketInput } from "../graphql/inputs/create-ticket.input";
import { CreatePerformanceInput } from "../graphql/inputs/create-performance.input";


export class AppService {
    constructor (
        private readonly destinationRepostitory: Repository<Destination>,
        private readonly venueRepository: Repository<Venue>,
        private readonly eventRepostory: Repository<Event>,
        private readonly ticketRespository: Repository<Ticket>,
        private readonly performanceRespository: Repository<Performance>
    ) {}


    async allDestinations(): Promise<Destination[]> {
        const data = await this.destinationRepostitory.find()
        return data;
    }

    async createDestination(input: CreateDestinationInput):Promise<Destination> {
        const destination = await this.destinationRepostitory.save(
            this.destinationRepostitory.create(input)
        )
        return destination
    }
     // events
    async allEvents():Promise<Event[]> {
        const events = await this.eventRepostory.find()
        return events;
    }

    async createEvent(input: CreateEventInput):Promise<Event> {
        const event = await this.eventRepostory.save(
            this.eventRepostory.create(input)
        )
        return event;
    }

    //performance

     async allPerformances(): Promise<Performance[]> {
        const data = await this.performanceRespository.find()
        return data;
    }

    async createPerformance(input: CreatePerformanceInput):Promise<Performance> {
        const performance = await this.performanceRespository.save(
            this.performanceRespository.create(input)
        )
        return performance;
    }

    // venue
    async allVenues():Promise<Venue[]> {
        const venues = await this.venueRepository.find()
        return venues;
    }

    async createVenue(input: CreateVenueInput):Promise<Venue> {
        const venue = await this.venueRepository.save(
            this.venueRepository.create(input)
        )
        return venue;
    }

    // tickets
    async allTickets():Promise<Ticket[]> {
        const tickets = await this.ticketRespository.find()
        return tickets;
    }

    async createTicket(input: CreateTicketInput):Promise<Ticket> {
        const ticket = await this.ticketRespository.save(
            this.ticketRespository.create(input)
        )
        return ticket;
    }
}