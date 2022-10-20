import { Team } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ITeamsRepository } from '@modules/team/repositories/ITeamsRepository';
import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';

@injectable()
export class FindMyTeamsUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute(userId: string): Promise<Team[]> {
    const user = await this.usersRepository.findById(userId);

    if (!user) throw new AppError('User not found', 404);

    const teams = await this.teamsRepository.findMyTeams(userId);

    return teams;
  }
}
