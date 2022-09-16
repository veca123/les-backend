import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { CreateUserController } from '../useCases/CreateUser/CreateUserController';
import { FindAllUsersController } from '../useCases/FindAllUsers/FindAllUsersController';
import { UpdateUserAvatarController } from '../useCases/UpdateUserAvatar/UpdateUserAvatarController';

export const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload('avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const findAllUsersController = new FindAllUsersController();

usersRouter.post('/', createUserController.handle);

usersRouter.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

usersRouter.get('/', findAllUsersController.handle);
