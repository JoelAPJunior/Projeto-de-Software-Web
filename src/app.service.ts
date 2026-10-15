
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMensagem(): string {
    return 'Organize seus projetos e tarefas em um só lugar.';
  }
}
