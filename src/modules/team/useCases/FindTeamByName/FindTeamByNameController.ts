import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindTeamByNameUseCase } from './FindTeamByNameUseCase';

export class FindTeamByNameController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const teamName  = request.query;
    const findTeamByNameUseCase = container.resolve(FindTeamByNameUseCase);

    const teamResponse = await findTeamByNameUseCase.execute({
      teamName : String(teamName)
    });

    return response.json(teamResponse);
  }
}
