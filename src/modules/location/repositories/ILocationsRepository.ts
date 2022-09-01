import { Location } from '@prisma/client';

import { ICreateLocationDTO } from './LocationsDTO';

export interface ILocationsRepository {
  create(data: ICreateLocationDTO): Promise<Location>;
  findAll(): Promise<Location[]>;
  findById(id: string): Promise<Location | undefined>;
  delete(id: string): Promise<void>;
}
