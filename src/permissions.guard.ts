import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );
    if (!permissions) {
      return false;
    }
    const request = context.switchToHttp().getRequest();
    const userPermissions = request['permissions'];
    if (!userPermissions) return false;
    return userPermissions && userPermissions.includes(permissions.join());
  }
}
