import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendInvitationUseCase } from './SendInvitationUseCase';

export class SendInvitationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { userId, eventId } = request.body;

    const sendInvitationUseCase = container.resolve(SendInvitationUseCase);

    await sendInvitationUseCase.execute({ userId, eventId });

    return response.status(200).send();
  }
}
