import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllEventsUseCase } from './FindAllEventsUseCase';

export class FindAllEventsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const findAllEventsUseCase = container.resolve(FindAllEventsUseCase);

    const events = await findAllEventsUseCase.execute();

    return response.json(events);
  }
}
