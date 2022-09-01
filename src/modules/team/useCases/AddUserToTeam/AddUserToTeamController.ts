import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AddUserToTeamUseCase } from './AddUserToTeamUseCase';

export class AddUserToTeamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, teamId } = request.query;

    const createTeamUseCase = container.resolve(AddUserToTeamUseCase);

    const category = await createTeamUseCase.execute({
      userId: String(userId),
      teamId: String(teamId),
    });

    return response.status(201).json(category);
  }
}
