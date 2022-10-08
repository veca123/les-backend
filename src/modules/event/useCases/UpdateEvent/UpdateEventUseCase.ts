import { Event } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IUpdateEventDTO } from '@modules/event/repositories/EventsDTO';
import { IEventsRepository } from '@modules/event/repositories/IEventsRepository';
import { ISportsRepository } from '@modules/sport/repositories/ISportsRepository';

@injectable()
export class UpdateEventUseCase {
  constructor(
    @inject('EventsRepository')
    private categoriesRepository: IEventsRepository,
    @inject('SportsRepository')
    private sportsRepository: ISportsRepository,
  ) {}

  public async execute({
    day,
    time,
    description,
    location,
    name,
    teamsLimit,
    sportId,
    id,
  }: IUpdateEventDTO): Promise<Event> {
    const event = await this.categoriesRepository.findById(id);

    if (!event) {
      throw new AppError('Event not found');
    }

    if (sportId) {
      const sport = await this.sportsRepository.findById(sportId);

      if (!sport) {
        throw new AppError('Sport not found');
      }

      event.sportId = sportId;
    }

    event.day = day || event.day;
    event.time = time || event.time;
    event.description = description || event.description;
    event.location = location || event.location;
    event.name = name || event.name;
    event.teamsLimit = teamsLimit || event.teamsLimit;

    const updatedEvent = await this.categoriesRepository.update(event);

    return updatedEvent;
  }
}
