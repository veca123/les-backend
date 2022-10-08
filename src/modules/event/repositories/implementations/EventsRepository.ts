import { Event, Sport, Team } from '@prisma/client';

import { prisma } from '@shared/infra/prisma';

import { IAddTeamToEventDTO } from '@modules/event/useCases/AddTeamToEvent/AddTeamToEventUseCase';

import { ICreateEventDTO } from '../EventsDTO';
import { IEventsRepository } from '../IEventsRepository';

type FindAll = (Event & {
  Sport: Sport;
  teams: Team[];
  requests: {
    name: string;
    id: string;
  }[];
  attendees: {
    name: string;
    id: string;
  }[];
})[];

export class EventsRepository implements IEventsRepository {
  private ormRepository = prisma.event;

  public async create({
    createdBy,
    day,
    description,
    location,
    name,
    teamsLimit,
    time,
    sportId,
  }: ICreateEventDTO): Promise<Event> {
    const event = await this.ormRepository.create({
      data: {
        createdBy,
        day,
        description,
        location,
        name,
        teamsLimit,
        time,
        sportId,
      },
    });

    return event;
  }

  public async findAll(): Promise<FindAll> {
    const events = await this.ormRepository.findMany({
      include: {
        Sport: true,
        attendees: {
          select: {
            id: true,
            name: true,
          },
        },
        requests: {
          select: {
            id: true,
            name: true,
          },
        },
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

  public async addTeam({
    teamId,
    eventId,
  }: IAddTeamToEventDTO): Promise<Event> {
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

  public async findMyEvents(userId: string): Promise<FindAll> {
    const events = await this.ormRepository.findMany({
      where: {
        createdBy: userId,
      },
      include: {
        Sport: true,
        attendees: {
          select: {
            id: true,
            name: true,
          },
        },
        requests: {
          select: {
            id: true,
            name: true,
          },
        },
        teams: true,
      },
    });

    return events;
  }
}
