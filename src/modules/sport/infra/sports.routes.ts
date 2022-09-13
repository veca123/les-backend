import { Router } from 'express';

import { CreateSportController } from '../useCases/CreateSport/CreateSportController';
import { FindAllSportsController } from '../useCases/FindAllSports/FindAllSportsController';

export const sportsRouter = Router();

const createSportController = new CreateSportController();
const findAllSportsController = new FindAllSportsController();

sportsRouter.post('/', createSportController.handle);
sportsRouter.get('/', findAllSportsController.handle);
