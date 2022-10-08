import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindMyEventsUseCase } from './FindMyEventsUseCase';

export class FindMyEventsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const findMyEventsUseCase = container.resolve(FindMyEventsUseCase);

    const events = await findMyEventsUseCase.execute(id);

    return response.json(events);
  }
}
