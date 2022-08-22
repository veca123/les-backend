import { Router } from 'express';

import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated';

import { CreateCategoryController } from '../useCases/CreateCategory/CreateCategoryController';
import { DeleteCategoryController } from '../useCases/DeleteCategory/DeleteCategoryController';
import { FindAllCategoriesController } from '../useCases/FindAllCategories/FindAllCategoriesController';

export const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();
const findAllCategoriesController = new FindAllCategoriesController();
const deleteCategoryController = new DeleteCategoryController();

categoriesRouter.use(ensureAuthenticated);

categoriesRouter.post('/', createCategoryController.handle);

categoriesRouter.get('/', findAllCategoriesController.handle);

categoriesRouter.delete('/:id', deleteCategoryController.handle);
