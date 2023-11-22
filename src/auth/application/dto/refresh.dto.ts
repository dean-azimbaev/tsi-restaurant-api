import { ApiProperty } from '@nestjs/swagger';

export class RefreshDTO {
  @ApiProperty({
    description: 'Токен обновления',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  })
  refresh_token: string;
}
