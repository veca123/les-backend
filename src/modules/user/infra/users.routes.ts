import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { CreateUserController } from '../useCases/CreateUser/CreateUserController';
import { DisplayMeController } from '../useCases/DisplayMe/DisplayMeController';
import { FindAllUsersController } from '../useCases/FindAllUsers/FindAllUsersController';
import { UpdateUserAvatarController } from '../useCases/UpdateUserAvatar/UpdateUserAvatarController';
import { FindUserByNameController } from '../useCases/FindUserByName/FindUserByNameController';
import { FindUserByEmailController } from '../useCases/FindUserByEmail/FindUserByEmailController';


export const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload('avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const findAllUsersController = new FindAllUsersController();
const displayMeController = new DisplayMeController();
const findUserByNameController = new FindUserByNameController();
const findUserByEmailController = new FindUserByEmailController();

usersRouter.post('/', createUserController.handle);

usersRouter.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

usersRouter.get('/', findAllUsersController.handle);
usersRouter.get('/me/:id', displayMeController.handle);
usersRouter.get('/findUserByName', findUserByNameController.handle);
usersRouter.get('/findUserByEmail', findUserByEmailController.handle);
