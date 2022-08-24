import { Router } from 'express';

import { AddUserToTeamController } from '../useCases/AddUserToTeam/AddUserToTeamController';
import { CreateTeamController } from '../useCases/CreateTeam/CreateTeamController';

export const teamsRouter = Router();

const createTeamController = new CreateTeamController();
const addUserToTeamController = new AddUserToTeamController();

teamsRouter.post('/', createTeamController.handle);

teamsRouter.post('/addUser', addUserToTeamController.handle);
