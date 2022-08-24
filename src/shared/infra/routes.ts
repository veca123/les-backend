import { Router } from 'express';

import { teamsRouter } from '@modules/team/infra/teams.routes';
import { authRouter } from '@modules/user/infra/auth.routes';
import { usersRouter } from '@modules/user/infra/users.routes';

export const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);
routes.use('/teams', teamsRouter);
