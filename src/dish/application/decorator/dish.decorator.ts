import { Controller, UseGuards, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export const Dish = () =>
  applyDecorators(Controller('dishes'), ApiTags('Dish CRUD'), UseGuards());
