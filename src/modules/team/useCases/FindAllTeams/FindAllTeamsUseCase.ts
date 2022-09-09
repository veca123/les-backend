import { Team } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { ITeamsRepository } from '@modules/team/repositories/ITeamsRepository';

@injectable()
export class FindAllTeamsUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}
  public async execute(): Promise<Location[]> {
    const teams = await this.teamsRepository.findAll();

    return teams;
  }
}
