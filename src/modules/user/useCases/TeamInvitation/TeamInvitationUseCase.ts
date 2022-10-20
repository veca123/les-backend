import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ITeamsRepository } from '@modules/team/repositories/ITeamsRepository';
import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';
import { Invitation } from '@modules/user/repositories/UsersDTO';

type Request = {
  userId: string;
  teamId: string;
  invitation: Invitation;
};

@injectable()
export class TeamInvitationUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}
  public async execute({ userId, teamId, invitation }: Request): Promise<void> {
    if (!userId || !teamId || !invitation)
      throw new AppError('Missing parameters', 400);

    if (
      invitation !== 'accepted' &&
      invitation !== 'rejected' &&
      invitation !== 'send'
    )
      throw new AppError('Invalid invitation', 400);

    const user = await this.usersRepository.findById(userId);

    if (!user) throw new AppError('User not found');

    const team = await this.teamsRepository.findById(teamId);

    if (!team) throw new AppError('Team not found');

    await this.usersRepository.handleInvitation(userId, teamId, invitation);
  }
}
