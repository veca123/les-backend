import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSportUseCase } from './CreateSportUseCase';

export class CreateSportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createSportUseCase = container.resolve(CreateSportUseCase);

    const category = await createSportUseCase.execute({
      name,
    });

    return response.status(201).json(category);
  }
}
