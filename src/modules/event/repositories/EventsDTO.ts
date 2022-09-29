export interface ICreateEventDTO {
  name: string;
  description: string;
  date: string;
  time: string;
  teamsLimit: number;
  location: string;
  sportId?: string;
}
