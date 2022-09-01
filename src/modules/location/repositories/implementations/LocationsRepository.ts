import { Location } from '@prisma/client';

import { prisma } from '@shared/infra/prisma';

import { ILocationsRepository } from '../ILocationsRepository';
import { ICreateLocationDTO } from '../LocationsDTO';

export class LocationsRepository implements ILocationsRepository {
  private ormRepository = prisma.location;

  public async create(data: ICreateLocationDTO): Promise<Location> {
    const location = await this.ormRepository.create({
      data,
    });

    return location;
  }

  public async findAll(): Promise<Location[]> {
    const locations = await this.ormRepository.findMany();

    return locations;
  }

  public async findById(id: string): Promise<Location | undefined> {
    const location = await this.ormRepository.findUnique({
      where: {
        id,
      },
    });

    return location;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete({
      where: {
        id,
      },
    });
  }
}
