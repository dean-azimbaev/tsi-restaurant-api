import { Get, applyDecorators } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CategoryDTO } from '../dto';

export const FindCategories = () =>
  applyDecorators(
    Get(),
    ApiOperation({
      summary: 'Получение списка блюд',
    }),
    ApiOkResponse({ type: [CategoryDTO] }),
    ApiUnauthorizedResponse({ description: 'Необходима авторизация' }),
  );
