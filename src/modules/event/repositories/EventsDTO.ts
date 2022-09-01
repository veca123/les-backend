export interface ICreateEventDTO {
  name: string;
  description: string;
  date: Date;
  teamsLimit: number;
  sportId?: string;
  locationId?: string;
}
