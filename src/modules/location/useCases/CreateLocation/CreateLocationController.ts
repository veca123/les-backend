import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateLocationUseCase } from './CreateLocationUseCase';

export class CreateLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { street, cep, number, city, state } = request.body;

    const createLocationUseCase = container.resolve(CreateLocationUseCase);

    const category = await createLocationUseCase.execute({
      street,
      cep,
      number,
      city,
      state,
    });

    return response.status(201).json(category);
  }
}
