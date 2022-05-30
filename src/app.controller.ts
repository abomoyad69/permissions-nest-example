import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Permissions } from './permissions.decorator';
import { PermissionsGuard } from './permissions.guard';
@UseGuards(PermissionsGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Permissions('lmao')
  @Get('lmao')
  lmao(): { message: string } {
    return { message: 'lmao' };
  }

  @Permissions('haha')
  @Get('haha')
  haha(): { message: string } {
    return { message: 'haha' };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
