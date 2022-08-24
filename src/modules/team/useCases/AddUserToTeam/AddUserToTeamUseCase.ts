import { Team } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ITeamsRepository } from '@modules/team/repositories/ITeamsRepository';
import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';

export interface IAddUserToTeamDTO {
  userId: string;
  teamId: string;
}

@injectable()
export class AddUserToTeamUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ userId, teamId }: IAddUserToTeamDTO): Promise<Team> {
    const userExistes = await this.usersRepository.findById(userId);

    if (!userExistes) throw new AppError('User not found');

    const teamExists = await this.teamsRepository.findById(teamId);

    if (!teamExists) throw new AppError('Team not found');

    const team = await this.teamsRepository.addUser({ userId, teamId });

    return team;
  }
}
