import { Ticket } from "../../models/TicketModel";

export interface TicketGateway {
  createTicket(ticket: Ticket): Promise<Ticket>;
  getTicketById(id: string): Promise<Ticket>;
  getTicketsByEventId(eventId: string): Promise<Ticket[]>;
  useTicket(ticketId: string): Promise<boolean>;
  deleteTicket(id: string): Promise<void>;
}
