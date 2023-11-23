import { Post, applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiForbiddenResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Roles } from 'src/auth';
import { UserRole } from 'src/auth/domain';

import { CreateCategoryDTO } from '../dto';

export const CreateCategory = () =>
  applyDecorators(
    Post(),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: 'Создание категории' }),
    ApiBody({ type: CreateCategoryDTO }),
    ApiUnauthorizedResponse({ description: 'Необходима авторизация' }),
    ApiForbiddenResponse({ description: 'Недостаточно прав' }),
  );
