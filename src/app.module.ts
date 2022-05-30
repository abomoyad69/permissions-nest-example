import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionsMiddleware } from './permissions.middleware';
import { TestController } from './test/test.controller';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(PermissionsMiddleware)
      .exclude({
        path: 'test/tt',
        method: RequestMethod.GET
      }
      )
      .forRoutes('*');
  }
}
