import { ApiProperty } from '@nestjs/swagger';

import { Phone } from 'src/auth/domain';

export class SignInDTO {
  phone: Phone;
  password: string;
}

export class SignInRequestDTO {
  @ApiProperty({
    description: 'Номер телефона',
    example: '996771065929',
  })
  phone: string;

  @ApiProperty({ description: 'Пароль', example: 'admin' })
  password: string;
}
