import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AcceptInvitationUseCase } from './AcceptInvitationUseCase';

export class AcceptInvitationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { userId, eventId } = request.body;

    const acceptInvitationUseCase = container.resolve(AcceptInvitationUseCase);

    await acceptInvitationUseCase.execute({ userId, eventId });

    return response.status(200).send();
  }
}
