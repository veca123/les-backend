import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { AcceptInvitationController } from '../useCases/AcceptInvitation/AcceptInvitationController';
import { CreateUserController } from '../useCases/CreateUser/CreateUserController';
import { DisplayMeController } from '../useCases/DisplayMe/DisplayMeController';
import { FindAllUsersController } from '../useCases/FindAllUsers/FindAllUsersController';
import { FindUserByEmailController } from '../useCases/FindUserByEmail/FindUserByEmailController';
import { FindUserByNameController } from '../useCases/FindUserByName/FindUserByNameController';
import { RejectInvitationController } from '../useCases/RejectInvitation/RejectInvitationController';
import { SendInvitationController } from '../useCases/SendInvitation/SendInvitationController';
import { UpdateUserAvatarController } from '../useCases/UpdateUserAvatar/UpdateUserAvatarController';

export const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload('avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const findAllUsersController = new FindAllUsersController();
const displayMeController = new DisplayMeController();
const findUserByNameController = new FindUserByNameController();
const findUserByEmailController = new FindUserByEmailController();
const acceptInvitationController = new AcceptInvitationController();
const rejectInvitationController = new RejectInvitationController();
const sendInvitationController = new SendInvitationController();

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

usersRouter.post('/acceptInvitation', acceptInvitationController.handle);
usersRouter.post('/rejectInvitation', rejectInvitationController.handle);
usersRouter.post('/sendInvitation', sendInvitationController.handle);
