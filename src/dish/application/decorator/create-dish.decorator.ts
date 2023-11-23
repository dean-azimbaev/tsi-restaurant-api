import { Post, applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CreateDishDTO } from '../dto';

export const CreateDish = () =>
  applyDecorators(
    Post(),
    ApiOperation({ summary: 'Создание блюда' }),
    ApiBody({ type: CreateDishDTO }),
    ApiCreatedResponse({ description: 'Блюдо успешно создано' }),
    ApiUnauthorizedResponse({ description: 'Не авторизован' }),
    ApiForbiddenResponse({ description: 'Нет доступа' }),
    ApiInternalServerErrorResponse({ description: 'Ошибка сервера' }),
  );
