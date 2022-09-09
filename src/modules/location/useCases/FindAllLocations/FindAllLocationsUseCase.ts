import { Location } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { ILocationsRepository } from '@modules/location/repositories/ILocationsRepository';

@injectable()
export class FindAllLocationsUseCase {
  constructor(
    @inject('LocationsRepository')
    private locationsRepository: ILocationsRepository,
  ) {}
  public async execute(): Promise<Location[]> {
    const locations = await this.locationsRepository.findAll();

    return locations;
  }
}
