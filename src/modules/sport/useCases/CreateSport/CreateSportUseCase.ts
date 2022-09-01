import { Sport } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ISportsRepository } from '@modules/sport/repositories/ISportsRepository';
import { ICreateSportDTO } from '@modules/sport/repositories/SportsDTO';

@injectable()
export class CreateSportUseCase {
  constructor(
    @inject('SportsRepository')
    private categoriesRepository: ISportsRepository,
  ) {}

  public async execute({ name }: ICreateSportDTO): Promise<Sport> {
    if (!name) {
      throw new AppError('Invalid data');
    }

    const sportAlreadyExists = await this.categoriesRepository.findByName(name);

    if (sportAlreadyExists) {
      throw new AppError('Sport already exists');
    }

    const category = this.categoriesRepository.create({ name });

    return category;
  }
}
