import { User } from '@prisma/client';

import { ICreateUserDTO, IUpdateAvatarDTO } from './UsersDTO';

interface IInvitation {
  userId: string;
  eventId: string;
}

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findAll(): Promise<User[]>;
  findByName(name: string): Promise<User | undefined>;
  findById(id: string): Promise<User>;
  pathAvatar(data: IUpdateAvatarDTO): Promise<User>;
  sendInvitation(data: IInvitation): Promise<void>;
  acceptInvitation(data: IInvitation): Promise<void>;
  rejectInvitation(data: IInvitation): Promise<void>;
}
