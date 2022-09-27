import { inject, injectable } from 'tsyringe';

import { ISportsRepository } from '@modules/sport/repositories/ISportsRepository';

@injectable()
export class FindAllSportsUseCase {
  constructor(
    @inject('SportsRepository')
    private sportsRepository: ISportsRepository,
  ) {}
  public async execute(): Promise<
    {
      id: string;
      name: string;
    }[]
  > {
    const sports = await this.sportsRepository.findAll();

    return sports;
  }
}
