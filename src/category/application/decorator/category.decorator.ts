import { Controller, UseGuards, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth';

export const Category = () =>
  applyDecorators(
    Controller('categories'),
    ApiTags('Admin resources'),
    ApiBearerAuth(),
    UseGuards(AuthGuard),
  );
