import { EventModel } from "../../models/EventModel";

export type TicketTypeGatewayInput = {
  description: string;
  price: number;
  quantity: number;
};

export type CreateEventGatewayInput = {
  description: string;
  startDatetime: Date;
  endDateTime: Date;
  ticketTypes: TicketTypeGatewayInput[];
};

export interface EventGateway {
  createEvent(event: CreateEventGatewayInput): Promise<string>;
  getEventById(id: string): Promise<EventModel>;
}
