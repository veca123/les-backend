import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllLocationsUseCase } from './FindAllLocationsUseCase';

export class FindAllLocationsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const findAllLocationsUseCase = container.resolve(FindAllLocationsUseCase);

    const locations = await findAllLocationsUseCase.execute();

    return response.json(locations);
  }
}
