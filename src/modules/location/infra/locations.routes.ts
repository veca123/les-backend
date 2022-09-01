import { Router } from 'express';

import { CreateLocationController } from '../useCases/CreateLocation/CreateLocationController';

export const locationsRouter = Router();

const createLocationController = new CreateLocationController();

locationsRouter.post('/', createLocationController.handle);
