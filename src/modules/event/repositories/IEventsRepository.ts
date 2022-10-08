import { Event, Sport, Team } from '@prisma/client';

import { IAddTeamToEventDTO } from '../useCases/AddTeamToEvent/AddTeamToEventUseCase';
import { ICreateEventDTO, IUpdateEventDTO } from './EventsDTO';

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

export interface IEventsRepository {
  create(data: ICreateEventDTO): Promise<Event>;
  findAll(): Promise<FindAll>;
  findById(id: string): Promise<Event | undefined>;
  findByName(name: string): Promise<Event | undefined>;
  delete(id: string): Promise<void>;
  addTeam({ teamId, eventId }: IAddTeamToEventDTO): Promise<Event>;
  findMyEvents(userId: string): Promise<FindAll>;
  update(data: IUpdateEventDTO): Promise<Event>;
}
