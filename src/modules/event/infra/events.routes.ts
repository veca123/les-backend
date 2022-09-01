import { Router } from 'express';

import { CreateEventController } from '../useCases/CreateEvent/CreateEventController';

export const eventsRouter = Router();

const createEventController = new CreateEventController();

eventsRouter.post('/', createEventController.handle);
