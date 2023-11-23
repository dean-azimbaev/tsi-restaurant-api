import { User } from 'src/auth';
import {
  Promocode,
  FindPromocodes,
  GeneratePromocode,
  ApplyPromocode,
  ActivatePromocode,
} from './application';
import { PromocodeInteractor } from './application/promocode.interactor';
import { Param, ParseUUIDPipe } from '@nestjs/common';

@Promocode()
export class PromocodeController {
  constructor(private interactor: PromocodeInteractor) {}

  @FindPromocodes()
  find() {
    return this.interactor.find();
  }

  @GeneratePromocode()
  generate() {
    return this.interactor.generate();
  }

  @ActivatePromocode()
  activate() {}

  @ApplyPromocode()
  apply(@Param('code') code: string, @User('id', ParseUUIDPipe) id: string) {
    return this.interactor.apply(code, id);
  }
}
