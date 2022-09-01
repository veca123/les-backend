import { container } from 'tsyringe';

import { ILocationsRepository } from '@modules/location/repositories/ILocationsRepository';
import { LocationsRepository } from '@modules/location/repositories/implementations/LocationsRepository';

container.registerSingleton<ILocationsRepository>(
  'LocationsRepository',
  LocationsRepository,
);
