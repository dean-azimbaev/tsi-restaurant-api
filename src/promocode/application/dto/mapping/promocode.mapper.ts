import { Promocode } from 'src/promocode/domain';

import { PromocodeDTO } from '../promocode.dto';

export class PromocodeMapper {
  static toDTO = (code: Promocode): PromocodeDTO => ({
    code: code.code,
    status: code.status.value,
    activated_at: code.activatedAt,
    applied_at: code.appliedAt,
    applied_by: code.appliedBy,
  });
}
