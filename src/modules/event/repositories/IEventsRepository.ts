import { Event } from '@prisma/client';

import { ICreateEventDTO } from './EventsDTO';

export interface IEventsRepository {
  create(data: ICreateEventDTO): Promise<Event>;
  findAll(): Promise<Event[]>;
  findById(id: string): Promise<Event | undefined>;
  findByName(name: string): Promise<Event | undefined>;
  delete(id: string): Promise<void>;
}
