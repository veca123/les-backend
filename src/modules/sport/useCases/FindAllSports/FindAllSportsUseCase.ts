import { Sport } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { ISportsRepository } from '@modules/sport/repositories/ISportsRepository';

@injectable()
export class FindAllSportsUseCase {
  constructor(
    @inject('SportsRepository')
    private sportsRepository: ISportsRepository,
  ) {}
  public async execute(): Promise<Sport[]> {
    const sports = await this.sportsRepository.findAll();

    return sports;
  }
}
