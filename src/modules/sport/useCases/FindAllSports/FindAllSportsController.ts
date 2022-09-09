import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllSportsUseCase } from './FindAllSportsUseCase';

export class FindAllSportsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const findAllSportsUseCase = container.resolve(FindAllSportsUseCase);

    const sports = await findAllSportsUseCase.execute();

    return response.json(sports);
  }
}
