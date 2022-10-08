import { inject, injectable } from 'tsyringe';

import { IEventsRepository } from '@modules/event/repositories/IEventsRepository';
import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';

@injectable()
export class SendInvitationUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('EventsRepository')
    private eventsRepository: IEventsRepository,
  ) {}
  public async execute({ userId, eventId }): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const event = await this.eventsRepository.findById(eventId);

    if (!event) {
      throw new Error('Event not found');
    }

    await this.usersRepository.sendInvitation({ userId, eventId });
  }
}
