import { Controller, UseGuards, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { AuthGuard } from 'src/auth/application';

export const Promocode = () =>
  applyDecorators(
    Controller('promocodes'),
    ApiTags('Admin resources'),
    ApiBearerAuth(),
    UseGuards(AuthGuard),
  );
