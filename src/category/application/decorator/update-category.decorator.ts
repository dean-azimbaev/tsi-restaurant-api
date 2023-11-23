import { Patch, applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { UpdateCategoryDTO } from '../dto';
import { Roles } from 'src/auth';
import { UserRole } from 'src/auth/domain';

export const UpdateCategory = () =>
  applyDecorators(
    Patch(':id'),
    Roles(UserRole.ADMIN),
    ApiParam({
      type: 'string',
      name: 'id',
      description: 'Идентификатор категории',
    }),
    ApiOperation({ summary: 'Обновить категорию' }),
    ApiBody({ type: UpdateCategoryDTO }),
    ApiNoContentResponse({ description: 'Категория успешно обновлена' }),
    ApiUnauthorizedResponse({ description: 'Необходима авторизация' }),
    ApiForbiddenResponse({ description: 'Недостаточно прав' }),
    ApiNotFoundResponse({ description: 'Категория не найдена' }),
    ApiInternalServerErrorResponse({ description: 'Ошибка сервера' }),
  );
