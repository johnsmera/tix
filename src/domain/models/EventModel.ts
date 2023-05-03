export class EventModel {
  public id: string;
  public description: string;
  public startDatetime: Date;
  public endDateTime: Date;
  public ticketTypes: TicketTypeModel[];

  constructor(input: EventModelProps) {
    this.id = input.id;
    this.description = input.description;
    this.startDatetime = input.startDatetime;
    this.endDateTime = input.endDateTime;
    this.ticketTypes = input.ticketTypes;
  }
}

type EventModelProps = {
  readonly id: string;
  readonly description: string;
  readonly startDatetime: Date;
  readonly endDateTime: Date;
  readonly ticketTypes: TicketTypeModel[];
};

type TicketTypeModel = {
  id: string;
  description: string;
  price: number;
  quantity: number;
};
