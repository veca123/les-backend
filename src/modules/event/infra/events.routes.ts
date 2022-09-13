import { Router } from 'express';

import { CreateEventController } from '../useCases/CreateEvent/CreateEventController';
import { FindAllEventsController } from '../useCases/FindAllEvents/FindAllEventsController';

export const eventsRouter = Router();

const createEventController = new CreateEventController();
const findAllEventsController = new FindAllEventsController();

eventsRouter.post('/', createEventController.handle);
eventsRouter.get('/', findAllEventsController.handle);
