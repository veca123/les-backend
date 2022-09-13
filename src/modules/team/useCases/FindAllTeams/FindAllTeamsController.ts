import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllTeamsUseCase } from './FindAllTeamsUseCase';

export class FindAllTeamsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const findAllTeamsUseCase = container.resolve(FindAllTeamsUseCase);

    const teams = await findAllTeamsUseCase.execute();

    return response.json(teams);
  }
}
