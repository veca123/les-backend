import { Team } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ITeamsRepository } from '@modules/team/repositories/ITeamsRepository';
import { ICreateTeamDTO } from '@modules/team/repositories/TeamsDTO';

@injectable()
export class CreateTeamUseCase {
  constructor(
    @inject('TeamsRepository')
    private categoriesRepository: ITeamsRepository,
  ) {}

  public async execute({ name, description }: ICreateTeamDTO): Promise<Team> {
    const teamAlreadyExists = await this.categoriesRepository.findByName(name);

    if (teamAlreadyExists) {
      throw new AppError('Team already exists');
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}
