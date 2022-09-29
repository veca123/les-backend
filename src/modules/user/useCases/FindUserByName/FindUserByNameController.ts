import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByNameUseCase } from './FindUserByNameUseCase';

export class FindUserByNameController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const {userName}  = request.query;
    const findUserByNameUseCase = container.resolve(FindUserByNameUseCase);

    const userResponse = await findUserByNameUseCase.execute({
      userName : String(userName)
    });

    return response.json(userResponse);
  }
}
