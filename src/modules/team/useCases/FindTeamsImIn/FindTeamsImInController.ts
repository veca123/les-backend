import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindTeamsImInUseCase } from './FindTeamsImInUseCase';

export class FindTeamsImInController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const findTeamsImInUseCase = container.resolve(FindTeamsImInUseCase);

    const teams = await findTeamsImInUseCase.execute(userId);

    return response.json(teams);
  }
}
