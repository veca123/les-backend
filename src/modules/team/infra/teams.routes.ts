import { Router } from 'express';

import { AddUserToTeamController } from '../useCases/AddUserToTeam/AddUserToTeamController';
import { CreateTeamController } from '../useCases/CreateTeam/CreateTeamController';
import { FindAllTeamsController } from '../useCases/FindAllTeams/FindAllTeamsController';

export const teamsRouter = Router();

const createTeamController = new CreateTeamController();
const addUserToTeamController = new AddUserToTeamController();
const findAllTeamsController = new FindAllTeamsController();

teamsRouter.post('/', createTeamController.handle);
teamsRouter.post('/addUser', addUserToTeamController.handle);

teamsRouter.get('/', findAllTeamsController.handle);
