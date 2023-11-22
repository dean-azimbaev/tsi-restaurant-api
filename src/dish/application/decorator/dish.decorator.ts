import { Controller, UseGuards, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/application';

export const Dish = () =>
  applyDecorators(
    Controller('dishes'),
    ApiTags('Dish CRUD'),
    ApiBearerAuth(),
    UseGuards(AuthGuard),
  );
