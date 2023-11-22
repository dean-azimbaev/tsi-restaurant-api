import { Controller, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export const Auth = () =>
  applyDecorators(Controller('auth'), ApiTags('Авторизация и аутентификация'));
