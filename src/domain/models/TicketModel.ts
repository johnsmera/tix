export type TicketInput = {
  id: string;
  eventId: string;
  description: string;
  price: number;
};

export class Ticket {
  id: string;
  eventId: string;
  description: string;
  price: number;
  useDate: Date | null;

  constructor(input: TicketInput) {
    this.id = input.id;
    this.eventId = input.eventId;
    this.description = input.description;
    this.price = input.price;
    this.useDate = null;
  }
}
