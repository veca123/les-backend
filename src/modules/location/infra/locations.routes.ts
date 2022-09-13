import { Router } from 'express';

import { CreateLocationController } from '../useCases/CreateLocation/CreateLocationController';
import { FindAllLocationsController } from '../useCases/FindAllLocations/FindAllLocationsController';

export const locationsRouter = Router();

const createLocationController = new CreateLocationController();
const findAllLocationsController = new FindAllLocationsController();

locationsRouter.post('/', createLocationController.handle);
locationsRouter.get('/', findAllLocationsController.handle);
