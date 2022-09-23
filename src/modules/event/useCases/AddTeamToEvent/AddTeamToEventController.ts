import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AddTeamToEventUseCase } from './AddTeamToEventUseCase';

export class AddTeamToEventController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { teamId, eventId } = request.query;

    const createEventUseCase = container.resolve(AddTeamToEventUseCase);

    const category = await createEventUseCase.execute({
      teamId: String(teamId),
      eventId: String(eventId),
    });

    return response.status(201).json(category);
  }
}
