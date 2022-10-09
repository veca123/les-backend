import { inject, injectable } from 'tsyringe';

import { IEventsRepository } from '@modules/event/repositories/IEventsRepository';

@injectable()
export class DeleteEventUseCase {
  constructor(
    @inject('EventsRepository')
    private eventsRepository: IEventsRepository,
  ) {}
  public async execute(id: string): Promise<void> {
    const event = await this.eventsRepository.findById(id);

    if (!event) {
      throw new Error('Event not found');
    }

    await this.eventsRepository.delete(id);
  }
}
