import { Sport } from '@prisma/client';

import { prisma } from '@shared/infra/prisma';

import { ISportsRepository } from '../ISportsRepository';
import { ICreateSportDTO } from '../SportsDTO';

export class SportsRepository implements ISportsRepository {
  private ormRepository = prisma.sport;

  public async create({ name }: ICreateSportDTO): Promise<Sport> {
    const sport = await this.ormRepository.create({
      data: {
        name,
      },
    });

    return sport;
  }

  public async findAll(): Promise<Sport[]> {
    const categories = await this.ormRepository.findMany({
      include: {
        events: true,
      },
    });

    return categories;
  }

  public async findByName(name: string): Promise<Sport | undefined> {
    const sport = await this.ormRepository.findFirst({
      where: {
        name,
      },
    });

    return sport;
  }

  public async findById(id: string): Promise<Sport | undefined> {
    const sport = await this.ormRepository.findUnique({
      where: {
        id,
      },
    });

    return sport;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete({
      where: {
        id,
      },
    });
  }
}
