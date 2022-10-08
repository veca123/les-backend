import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RejectInvitationUseCase } from './RejectInvitationUseCase';

export class RejectInvitationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { userId, eventId } = request.body;

    const rejectInvitationUseCase = container.resolve(RejectInvitationUseCase);

    await rejectInvitationUseCase.execute({ userId, eventId });

    return response.status(200).send();
  }
}
