export interface ICreateTeamDTO {
  name: string;
  description: string;
  createdBy: string;
}

export interface IUpdateTeamDTO {
  id: string;
  name?: string
  description?: string
}