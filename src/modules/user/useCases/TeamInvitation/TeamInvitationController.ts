import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { TeamInvitationUseCase } from './TeamInvitationUseCase';

export class TeamInvitationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { userId, teamId, invitation } = request.body;

    const teamInvitationUseCase = container.resolve(TeamInvitationUseCase);

    await teamInvitationUseCase.execute({ userId, teamId, invitation });

    return response.json({ message: 'Hello World!' });
  }
}
