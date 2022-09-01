import { Router } from 'express';

import { CreateSportController } from '../useCases/CreateSport/CreateSportController';

export const sportsRouter = Router();

const createSportController = new CreateSportController();

sportsRouter.post('/', createSportController.handle);
