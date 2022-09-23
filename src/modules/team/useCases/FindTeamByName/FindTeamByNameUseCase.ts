import { Team } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';

import { ITeamsRepository } from '@modules/team/repositories/ITeamsRepository';


export interface IFindTeamByNameDTO {
  teamName: string;
}

@injectable()
export class FindTeamByNameUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute({teamName}: IFindTeamByNameDTO): Promise<Team> {

    const teamExists = await this.teamsRepository.findByName(teamName);
    if (!teamExists) throw new AppError('Team not found');
    
    return teamExists;
  }
}
