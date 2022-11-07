export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUserDTO {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface IAuthenticateUserDTO {
  email: string;
  password: string;
}

export interface IUpdateAvatarDTO {
  id: string;
  avatarFileName: string;
}

export type Invitation = 'send' | 'accepted' | 'rejected';
