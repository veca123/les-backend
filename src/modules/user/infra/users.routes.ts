import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { CreateUserController } from '../useCases/CreateUser/CreateUserController';
import { DisplayMeController } from '../useCases/DisplayMe/DisplayMeController';
import { FindAllUsersController } from '../useCases/FindAllUsers/FindAllUsersController';
import { FindUserByEmailController } from '../useCases/FindUserByEmail/FindUserByEmailController';
import { FindUserByNameController } from '../useCases/FindUserByName/FindUserByNameController';
import { TeamInvitationController } from '../useCases/TeamInvitation/TeamInvitationController';
import { UpdateUserController } from '../useCases/UpdateUser/UpdateUserController';
import { UpdateUserAvatarController } from '../useCases/UpdateUserAvatar/UpdateUserAvatarController';

export const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload('avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const findAllUsersController = new FindAllUsersController();
const displayMeController = new DisplayMeController();
const findUserByNameController = new FindUserByNameController();
const findUserByEmailController = new FindUserByEmailController();
const teamInvitationController = new TeamInvitationController();
const updateUserController = new UpdateUserController();

usersRouter.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

usersRouter.get('/', findAllUsersController.handle);
usersRouter.get('/me/:id', displayMeController.handle);
usersRouter.get('/findUserByName', findUserByNameController.handle);
usersRouter.get('/findUserByEmail', findUserByEmailController.handle);

usersRouter.post('/', createUserController.handle);
usersRouter.post('/teamInvitation', teamInvitationController.handle);

usersRouter.put('/:id', updateUserController.handle);
