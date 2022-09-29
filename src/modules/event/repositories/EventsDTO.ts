export interface ICreateEventDTO {
  name: string;
  description: string;
  day: string;
  time: string;
  teamsLimit: number;
  location: string;
  sportId?: string;
}
