import { Repository } from "typeorm";
import { DestinationEntity,TicketEntity, PerformanceEntity,VenueEntity } from "../database/entities";

export interface Destination {
  id: string;
  name: string;
 
}

export interface Ticket {
  id: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  currency: number;

 
}

export interface Performance {
  id: string;
  name: string;
  start: number;
  soldOut: number;

 
}
export interface Venue {
  id: string;
  name: string;
  address: number;
  postalCode: number;
  town: string;
  currency: number;

 
}
export interface Database {
  destinations: Repository<DestinationEntity>;
  tickets: Repository<TicketEntity>;
  performance: Repository<PerformanceEntity>;
  venue: Repository<VenueEntity>;

}