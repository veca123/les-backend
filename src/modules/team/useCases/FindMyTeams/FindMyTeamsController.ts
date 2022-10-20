import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindMyTeamsUseCase } from './FindMyTeamsUseCase';

export class FindMyTeamsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const findTeamByNameUseCase = container.resolve(FindMyTeamsUseCase);

    const teams = await findTeamByNameUseCase.execute(userId);

    return response.json(teams);
  }
}
