import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get('tt')
    tt() {
        return { message: 'tt' };
    }
}
