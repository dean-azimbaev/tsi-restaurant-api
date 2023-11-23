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
      description:
        'Для осуществления операций в приложении нужно быть зарегистрированным пользователем и чтобы каждый раз не передавать в систему тел. номер и пароль для осуществления действия в админке, выдается ключ доступа, который откроет Вам доступ к ресурсам админки',
    }),
    Post('signin'),
    ApiBody({
      type: SignInRequestDTO,
    }),
    ApiCreatedResponse({ type: SignedInDTO }),
    ApiForbiddenResponse({ description: 'Неверный логин или пароль' }),
  );
