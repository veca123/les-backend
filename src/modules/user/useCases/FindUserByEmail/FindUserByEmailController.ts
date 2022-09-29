import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByEmailUseCase } from './FindUserByEmailUseCase';

export class FindUserByEmailController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const {userEmail}  = request.query;
    const findUserByEmailUseCase = container.resolve(FindUserByEmailUseCase);

    const userResponse = await findUserByEmailUseCase.execute({
      userEmail : String(userEmail)
    });

    return response.json(userResponse);
  }
}
