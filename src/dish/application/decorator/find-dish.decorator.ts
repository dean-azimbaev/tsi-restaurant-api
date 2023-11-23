import { Get, applyDecorators } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { DishDTO } from '../dto';
import { Roles } from 'src/auth/application';
import { UserRole } from 'src/auth/domain';

export const FindDish = () =>
  applyDecorators(
    Get(':id'),
    ApiOperation({
      description: 'Получение информации о блюде по его идентфикатору',
      summary: 'Получение блюда по id',
    }),
    ApiParam({
      description: 'Идентификатор блюда',
      name: 'id',
      type: 'string',
    }),
    ApiOkResponse({
      type: DishDTO,
    }),
    ApiNotFoundResponse({
      description: 'Блюдо не найдено',
    }),
    Roles(UserRole.ADMIN),
  );
