import { Router } from 'express';

import { AddUserToTeamController } from '../useCases/AddUserToTeam/AddUserToTeamController';
import { CreateTeamController } from '../useCases/CreateTeam/CreateTeamController';
import { FindAllTeamsController } from '../useCases/FindAllTeams/FindAllTeamsController';
import { FindMyTeamsController } from '../useCases/FindMyTeams/FindMyTeamsController';
import { FindTeamByNameController } from '../useCases/FindTeamByName/FindTeamByNameController';
import { FindTeamsImInController } from '../useCases/FindTeamsImIn/FindTeamsImInController';

export const teamsRouter = Router();

const createTeamController = new CreateTeamController();
const addUserToTeamController = new AddUserToTeamController();
const findAllTeamsController = new FindAllTeamsController();
const findTeamByNameController = new FindTeamByNameController();
const findMyTeamsController = new FindMyTeamsController();
const findTeamsImInController = new FindTeamsImInController();

teamsRouter.post('/', createTeamController.handle);
teamsRouter.post('/addUser', addUserToTeamController.handle);

teamsRouter.get('/', findAllTeamsController.handle);
// teamsRouter.get('/findTeamByName', findTeamByNameController.handle);
teamsRouter.get('/findMyTeams/:userId', findMyTeamsController.handle);
teamsRouter.get('/findTeamsImIn/:userId', findTeamsImInController.handle);
