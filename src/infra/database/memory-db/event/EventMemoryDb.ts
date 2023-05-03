import { randomUUID } from "crypto";
import {
  CreateEventGatewayInput,
  EventGateway,
} from "../../../../domain/gateways/event/EventGateway";
import { EventModel } from "../../../../domain/models/EventModel";

export class EventMemoryDb implements EventGateway {
  events: EventModel[] = [];

  async createEvent(event: CreateEventGatewayInput): Promise<string> {
    const newEvent: EventModel = {
      id: randomUUID(),
      description: event.description,
      startDatetime: event.startDatetime,
      endDateTime: event.endDateTime,
      ticketTypes: event.ticketTypes.map((type) => ({
        id: randomUUID(),
        description: type.description,
        price: type.price,
        quantity: type.quantity,
      })),
    };

    this.events.push(newEvent);

    return newEvent.id;
  }

  async getEventById(id: string): Promise<EventModel> {
    const event = this.events.find((event) => event.id === id);

    if (!event) {
      return {} as EventModel;
    }

    return event;
  }
}
