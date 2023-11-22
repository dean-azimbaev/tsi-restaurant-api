import { ApiProperty } from '@nestjs/swagger';

export class SignInRequestDTO {
  @ApiProperty({
    description: 'Номер телефона',
    example: '996771065929',
  })
  phone: string;

  @ApiProperty({ description: 'Пароль', example: 'admin' })
  password: string;
}
