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

export interface IUpdateEventDTO {
  id: string;
  name: string;
  description: string;
  day: string;
  time: string;
  teamsLimit: number;
  location: string;
  sportId?: string;
}
