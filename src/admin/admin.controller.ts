import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('admin')
@ApiTags('Admin')
export class AdminController {
  @Post(':user_id/promote')
  promote() {
    return {
      message: 'Method not implemented',
    };
  }
}
