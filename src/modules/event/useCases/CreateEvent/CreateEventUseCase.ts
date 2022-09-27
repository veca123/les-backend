import { Event } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICreateEventDTO } from '@modules/event/repositories/EventsDTO';
import { IEventsRepository } from '@modules/event/repositories/IEventsRepository';

@injectable()
export class CreateEventUseCase {
  constructor(
    @inject('EventsRepository')
    private categoriesRepository: IEventsRepository,
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
