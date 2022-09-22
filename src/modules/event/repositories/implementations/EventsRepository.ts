import { Event } from '@prisma/client';

import { prisma } from '@shared/infra/prisma';

import { IAddTeamToEventDTO } from '@modules/event/useCases/AddTeamToEvent/AddTeamToEventUseCase';

import { ICreateEventDTO } from '../EventsDTO';
import { IEventsRepository } from '../IEventsRepository';

export class EventsRepository implements IEventsRepository {
  private ormRepository = prisma.event;

  public async create(data: ICreateEventDTO): Promise<Event> {
    const event = await this.ormRepository.create({
      data,
      include: {
        Location: true,
        Sport: true,
        teams: true,
      },
    });

    return event;
  }

  public async findAll(): Promise<Event[]> {
    const events = await this.ormRepository.findMany({
      include: {
        Location: true,
        Sport: true,
        teams: true,
      },
    });

    return events;
  }

  public async findByName(name: string): Promise<Event | undefined> {
    const event = await this.ormRepository.findFirst({
      where: {
        name,
      },
    });

    return event;
  }

  public async findById(id: string): Promise<Event | undefined> {
    const event = await this.ormRepository.findUnique({
      where: {
        id,
      },
      include: {
        Location: true,
        Sport: true,
        teams: true,
      },
    });

    return event;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete({
      where: {
        id,
      },
    });
  }

  public async addTeam({ teamId, eventId }: IAddTeamToEventDTO): Promise<Event> {
    const event = await this.ormRepository.update({
      where: {
        id: eventId,
      },
      data: {
        teams: {
          connect: {
            id: teamId,
          },
        },
      },
      include: {
        teams: true,
      },
    });

    return event;
  }
}
