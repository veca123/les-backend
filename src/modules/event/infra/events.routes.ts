import { Router } from 'express';

import { AddTeamToEventController } from '../useCases/AddTeamToEvent/AddTeamToEventController';
import { CreateEventController } from '../useCases/CreateEvent/CreateEventController';
import { FindAllEventsController } from '../useCases/FindAllEvents/FindAllEventsController';
import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated'

export const eventsRouter = Router();

const createEventController = new CreateEventController();
const addTeamToEventController = new AddTeamToEventController();
const findAllEventsController = new FindAllEventsController();

eventsRouter.post('/', createEventController.handle);
eventsRouter.post('/addTeam', addTeamToEventController.handle);
eventsRouter.get('/', ensureAuthenticated, findAllEventsController.handle);
