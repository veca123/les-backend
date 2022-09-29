import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';

import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';


export interface IFindUserByEmailDTO {
  userEmail: string;
}

@injectable()
export class FindUserByEmailUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({userEmail}: IFindUserByEmailDTO): Promise<User> {

    const userExists = await this.usersRepository.findByEmail(userEmail);
    if (!userExists) throw new AppError('User not found');
    
    return userExists;
  }
}
