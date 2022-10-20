import { Team } from '@prisma/client';

import { IAddUserToTeamDTO } from '../useCases/AddUserToTeam/AddUserToTeamUseCase';
import { ICreateTeamDTO } from './TeamsDTO';

export interface ITeamsRepository {
  create(data: ICreateTeamDTO): Promise<Team>;
  findAll(): Promise<Team[]>;
  findById(id: string): Promise<Team | undefined>;
  findByName(name: string): Promise<Team | undefined>;
  delete(id: string): Promise<void>;
  addUser({ userId, teamId }: IAddUserToTeamDTO): Promise<Team>;
  findMyTeams(userId: string): Promise<Team[]>;
}
