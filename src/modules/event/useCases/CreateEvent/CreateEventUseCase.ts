import { Event } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICreateEventDTO } from '@modules/event/repositories/EventsDTO';
import { IEventsRepository } from '@modules/event/repositories/IEventsRepository';
import { ISportsRepository } from '@modules/sport/repositories/ISportsRepository';

@injectable()
export class CreateEventUseCase {
  constructor(
    @inject('EventsRepository')
    private categoriesRepository: IEventsRepository,
    @inject('SportsRepository')
    private sportsRepository: ISportsRepository,
  ) {}

  public async execute({
    date,
    description,
    location,
    name,
    teamsLimit,
    sportId,
  }: ICreateEventDTO): Promise<Event> {
    if (
      !date ||
      !description ||
      !teamsLimit ||
      !name ||
      !location ||
      !sportId
    ) {
      throw new AppError(
        `Missing data: ${!date ? 'date, ' : ''}${
          !description ? 'description, ' : ''
        }${!teamsLimit ? 'teamsLimit, ' : ''}${!name ? 'name, ' : ''}${
          !location ? 'location, ' : ''
        }${!sportId ? 'sportId' : ''}`,
      );
    }

    const sport = await this.sportsRepository.findById(sportId);

    if (!sport) {
      throw new AppError('Sport not found');
    }

    const event = this.categoriesRepository.create({
      date,
      description,
      location,
      name,
      teamsLimit,
      sportId,
    });

    return event;
  }
}
