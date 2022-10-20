import { Event } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICreateEventDTO } from '@modules/event/repositories/EventsDTO';
import { IEventsRepository } from '@modules/event/repositories/IEventsRepository';
import { ISportsRepository } from '@modules/sport/repositories/ISportsRepository';
import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';

@injectable()
export class CreateEventUseCase {
  constructor(
    @inject('EventsRepository')
    private categoriesRepository: IEventsRepository,
    @inject('SportsRepository')
    private sportsRepository: ISportsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    day,
    time,
    description,
    location,
    name,
    teamsLimit,
    sportId,
    createdBy,
  }: ICreateEventDTO): Promise<Event> {
    if (
      !day ||
      !description ||
      !teamsLimit ||
      !name ||
      !location ||
      !sportId ||
      !time ||
      !createdBy
    ) {
      throw new AppError(
        `Missing data: ${!day ? 'day, ' : ''}${
          !description ? 'description, ' : ''
        }${!teamsLimit ? 'teamsLimit, ' : ''}${!name ? 'name, ' : ''}${
          !location ? 'location, ' : ''
        }${!sportId ? 'sportId' : ''}${!time ? 'time' : ''}
        ${!createdBy ? 'createdBy' : ''}`,
      );
    }

    const user = await this.usersRepository.findById(createdBy);

    if (!user) {
      throw new AppError('User not found');
    }

    const sport = await this.sportsRepository.findById(sportId);

    if (!sport) {
      throw new AppError('Sport not found');
    }

    const event = this.categoriesRepository.create({
      day,
      time,
      description,
      location,
      name,
      teamsLimit,
      sportId,
      createdBy,
    });

    return event;
  }
}
