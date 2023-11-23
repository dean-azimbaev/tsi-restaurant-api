import { Post, applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Roles } from 'src/auth';
import { UserRole } from 'src/auth/domain';

export const GeneratePromocode = () =>
  applyDecorators(
    Post(),
    ApiOperation({
      summary: 'Генерация промокода',
      description: 'Генерация промокода',
    }),
    Roles(UserRole.ADMIN),
  );
