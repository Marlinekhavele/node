import { createConnection } from "typeorm";
import { Destination,Ticket, Venue, Performance } from "./entities";
import { Database } from "../lib/types";

export const connectDatabase = async (): Promise<Database> => {
  const connection = await createConnection();

  return {
    destinations: connection.getRepository(Destination),
    tickets: connection.getRepository(Ticket),
    performance: connection.getRepository(Performance),
    venue: connection.getRepository(Venue),


  }
};