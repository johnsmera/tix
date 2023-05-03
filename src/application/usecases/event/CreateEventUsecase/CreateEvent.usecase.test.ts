import { EventMemoryDb } from "../../../../infra/database/memory-db/event/EventMemoryDb";
import {
  CreateEventUsecase,
} from "./CreateEvent.usecase";

const eventMemoryDb = new EventMemoryDb();
const createEventUsecase = new CreateEventUsecase(eventMemoryDb);

describe("Create Event", () => {
  it("Should be able to create event", async () => {
    const event = {
      description: "event description",
      startDatetime: new Date(),
      endDateTime: new Date(),
      ticketTypes: [
        {
          quantity: 100,
          description: "ticket description",
          price: 100,
        },
      ],
    };

    const eventId = await createEventUsecase.execute(event);

    expect(eventId).toBeDefined();
  });
});
