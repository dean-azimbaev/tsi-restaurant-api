import { Get, applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export const FindCategoryDishes = () =>
  applyDecorators(
    Get(':id/dishes'),
    ApiOperation({ summary: 'Получить список блюд в категории' }),
    ApiUnauthorizedResponse({ description: 'Пользователь не авторизован' }),
    ApiForbiddenResponse({ description: 'Нет доступа' }),
    ApiNotFoundResponse({ description: 'Категория не найдена' }),
  );
