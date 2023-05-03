import { randomUUID } from "crypto";
import { EventGateway } from "../../../../domain/gateways/event/EventGateway";
import { EventModel } from "../../../../domain/models/EventModel";

type TicketTypeUsecaseInput = {
  description: string;
  price: number;
  quantity: number;
};

export type CreateEventUsecaseInput = {
  description: string;
  startDatetime: Date;
  endDateTime: Date;
  ticketTypes: TicketTypeUsecaseInput[];
};

export class CreateEventUsecase {
  constructor(private readonly eventGateway: EventGateway) {
    this.eventGateway = eventGateway;
  }

  async execute(input: CreateEventUsecaseInput): Promise<string> {
    const event = new EventModel({
      id: randomUUID(),
      description: input.description,
      startDatetime: input.startDatetime,
      endDateTime: input.endDateTime,
      ticketTypes: input.ticketTypes.map((type) => ({
        id: randomUUID(),
        description: type.description,
        price: type.price,
        quantity: type.quantity,
      })),
    });

    const gatewayInput: CreateEventUsecaseInput = {
      description: event.description,
      startDatetime: event.startDatetime,
      endDateTime: event.endDateTime,
      ticketTypes: event.ticketTypes,
    };

    const eventId = await this.eventGateway.createEvent(gatewayInput);

    return eventId;
  }
}
