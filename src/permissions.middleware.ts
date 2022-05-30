import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PermissionsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('over here');
    req['lmao'] = 'did it realy happen?';
    req['permissions'] = ['haha', 'lmao'];
    next();
  }
}
