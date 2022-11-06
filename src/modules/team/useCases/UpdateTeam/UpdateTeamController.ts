import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTeamUseCase } from './UpdateTeamUseCase';

export class UpdateTeamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;

    const updateTeamUseCase = container.resolve(UpdateTeamUseCase);

    const category = await updateTeamUseCase.execute({
      id,
      name,
      description,
    });

    return response.status(201).json(category);
  }
}
