import { Sport } from '@prisma/client';

import { ICreateSportDTO } from './SportsDTO';

export interface ISportsRepository {
  create(data: ICreateSportDTO): Promise<Sport>;
  findAll(): Promise<Sport[]>;
  findById(id: string): Promise<Sport | undefined>;
  findByName(name: string): Promise<Sport | undefined>;
  delete(id: string): Promise<void>;
}
