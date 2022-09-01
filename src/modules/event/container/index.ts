import { container } from 'tsyringe';

import { IEventsRepository } from '@modules/event/repositories/IEventsRepository';
import { EventsRepository } from '@modules/event/repositories/implementations/EventsRepository';

container.registerSingleton<IEventsRepository>(
  'EventsRepository',
  EventsRepository,
);
