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

    return events;
  }
}
