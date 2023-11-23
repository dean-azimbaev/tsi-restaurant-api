import { Post, applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

import { Roles } from 'src/auth';
import { UserRole } from 'src/auth/domain';

export const AddDishToCategory = () =>
  applyDecorators(
    Post(':id/dishes/:dish_id'),
    Roles(UserRole.ADMIN),
    ApiOperation({ summary: 'Добавление блюда в категорию' }),
    ApiParam({
      name: 'id',
      type: 'string',
      description: 'Идентификатор категории',
    }),
    ApiParam({
      name: 'dish_id',
      type: 'string',
      description: 'Идентификатор блюда, которое нужно добавить в категорию',
    }),
  );
