import { Router } from 'express';

import { AddTeamToEventController } from '../useCases/AddTeamToEvent/AddTeamToEventController';
import { CreateEventController } from '../useCases/CreateEvent/CreateEventController';
import { FindAllEventsController } from '../useCases/FindAllEvents/FindAllEventsController';
import { FindMyEventsController } from '../useCases/FindMyEvents/FindMyEventsController';

export const eventsRouter = Router();

const createEventController = new CreateEventController();
const addTeamToEventController = new AddTeamToEventController();
const findAllEventsController = new FindAllEventsController();
const findMyEventsController = new FindMyEventsController();

eventsRouter.post('/', createEventController.handle);
eventsRouter.post('/addTeam', addTeamToEventController.handle);
eventsRouter.get('/', findAllEventsController.handle);
eventsRouter.get('/myEvents/:id', findMyEventsController.handle);
