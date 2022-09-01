import { container } from 'tsyringe';

import { SportsRepository } from '@modules/sport/repositories/implementations/SportsRepository';
import { ISportsRepository } from '@modules/sport/repositories/ISportsRepository';

container.registerSingleton<ISportsRepository>(
  'SportsRepository',
  SportsRepository,
);
