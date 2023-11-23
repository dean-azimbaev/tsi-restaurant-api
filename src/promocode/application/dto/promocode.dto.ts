import { ApiProperty } from '@nestjs/swagger';
import { PromocodeStatus } from 'src/promocode/domain/enum';

export class PromocodeDTO {
  @ApiProperty({
    description: '',
    example: '41AE6F',
  })
  code: string;

  @ApiProperty({
    description: 'Статус промокода',
    enum: PromocodeStatus,
    example: PromocodeStatus.ACTIVE,
  })
  status: PromocodeStatus;

  @ApiProperty({
    description: 'Дата активации промокода',
    example: '2021-05-01T00:00:00.000Z',
  })
  activated_at: Date;

  @ApiProperty({
    description: 'Дата применения промокода',
    example: '2021-05-01T00:00:00.000Z',
  })
  applied_at: Date;

  @ApiProperty({
    description: 'Идентификатор пользователя, который применил промокод',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  applied_by: string;
}
