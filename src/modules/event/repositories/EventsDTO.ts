import { Sport, Team } from '@prisma/client';

export interface ICreateEventDTO {
  name: string;
  description: string;
  day: string;
  time: string;
  teamsLimit: number;
  location: string;
  sportId?: string;
  createdBy: string;
}

export type FindAll = (Event & {
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
