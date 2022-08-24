import { container } from 'tsyringe';

import { TeamsRepository } from '@modules/team/repositories/implementations/TeamsRepository';
import { ITeamsRepository } from '@modules/team/repositories/ITeamsRepository';

container.registerSingleton<ITeamsRepository>(
  'TeamsRepository',
  TeamsRepository,
);
