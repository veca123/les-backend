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

  public async execute(data: ICreateEventDTO): Promise<Event> {
    if (!data.date || !data.description || !data.teamsLimit || !data.name) {
      throw new AppError('Invalid data');
    }

    const event = this.categoriesRepository.create(data);

    return event;
  }
}
