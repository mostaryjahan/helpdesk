import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';

@Injectable()
export class TicketsService {
  private tickets: Ticket[] = [
    {
      id: 1,
      subject: 'Ticket 1',
      description: 'Description 1',
      priority: 'high',
      status: 'open',
      createdAt: '2020-01-01',
    },
  ];
  findAll() {
    return this.tickets;
  }
}
