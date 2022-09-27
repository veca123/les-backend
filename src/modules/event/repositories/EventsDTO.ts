export interface ICreateEventDTO {
  name: string;
  description: string;
  date: Date;
  teamsLimit: number;
  location: string;
  sportId?: string;
}
