
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('inicial')
  getInicial(): object {
    return {
      titulo: 'EASY TASKS',
      mensagem: this.appService.getMensagem(),
    };
  }
}
