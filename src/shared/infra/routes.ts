import { Router } from 'express';

import { eventsRouter } from '@modules/event/infra/events.routes';
import { sportsRouter } from '@modules/sport/infra/sports.routes';
import { teamsRouter } from '@modules/team/infra/teams.routes';
import { authRouter } from '@modules/user/infra/auth.routes';
import { usersRouter } from '@modules/user/infra/users.routes';

export const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);
routes.use('/teams', teamsRouter);
routes.use('/events', eventsRouter);
routes.use('/sports', sportsRouter);
