import { Post, applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { SignedInDTO, SignInRequestDTO } from '../dto';

export const SignIn = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Аутентификация пользователя и выдача токенов доступа',
    }),
    Post('signin'),
    ApiBody({
      type: SignInRequestDTO,
    }),
    ApiCreatedResponse({ type: SignedInDTO }),
    ApiForbiddenResponse({ description: 'Неверный логин или пароль' }),
  );
