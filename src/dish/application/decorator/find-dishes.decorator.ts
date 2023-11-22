import { Get, applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { Roles } from 'src/auth/application';
import { UserRole } from 'src/auth/domain';

export const FindDishes = () =>
  applyDecorators(
    Get(),
    ApiOperation({
      description: 'Получение списка блюд',
    }),
    Roles(UserRole.ADMIN),
  );
