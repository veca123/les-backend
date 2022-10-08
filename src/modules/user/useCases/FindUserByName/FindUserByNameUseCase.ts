import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';

export interface IFindUserByNameDTO {
  userName: string;
}

@injectable()
export class FindUserByNameUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ userName }: IFindUserByNameDTO): Promise<User> {
    const userExists = await this.usersRepository.findByName(userName);
    if (!userExists) throw new AppError('User not found');

    return userExists;
  }
}
