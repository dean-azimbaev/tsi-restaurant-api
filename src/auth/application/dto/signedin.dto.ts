import { ApiProperty } from '@nestjs/swagger';

export class SignedInDTO {
  @ApiProperty({
    description: 'Токен доступа',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  })
  access_token: string;

  @ApiProperty({
    description: 'Токен для обновления токена доступа',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ2',
  })
  refresh_token: string;
}
