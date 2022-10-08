import { Event } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { IEventsRepository } from '@modules/event/repositories/IEventsRepository';

@injectable()
export class FindAllEventsUseCase {
  constructor(
    @inject('EventsRepository')
    private eventsRepository: IEventsRepository,
  ) {}
  public async execute(): Promise<Event[]> {
    const events = await this.eventsRepository.findAll();

    try {
      const futureEvents = events.filter(event => {
        const eventDate = new Date(event.day);
        const currentDate = new Date();

        return eventDate > currentDate;
      });

      return futureEvents;
    } catch (error) {
      return events;
    }
  }
}
