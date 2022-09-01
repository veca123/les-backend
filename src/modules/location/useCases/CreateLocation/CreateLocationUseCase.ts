import { Location } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ILocationsRepository } from '@modules/location/repositories/ILocationsRepository';
import { ICreateLocationDTO } from '@modules/location/repositories/LocationsDTO';

@injectable()
export class CreateLocationUseCase {
  constructor(
    @inject('LocationsRepository')
    private categoriesRepository: ILocationsRepository,
  ) {}

  public async execute({
    street,
    cep,
    number,
    city,
    state,
  }: ICreateLocationDTO): Promise<Location> {
    if (!street || !cep || !number || !city || !state) {
      throw new AppError('Invalid data');
    }

    const category = this.categoriesRepository.create({
      street,
      cep,
      number,
      city,
      state,
    });

    return category;
  }
}
