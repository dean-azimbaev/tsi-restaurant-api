import { Body } from '@nestjs/common';

import {
  Auth,
  Refresh,
  SignIn,
  AuthInteractor,
  SignInDTO,
  SiginPipe,
} from './application';

@Auth()
export class AuthController {
  constructor(private interactor: AuthInteractor) {}

  @SignIn()
  signIn(@Body(SiginPipe) { phone, password }: SignInDTO) {
    return this.interactor.sigIn(phone, password);
  }

  @Refresh()
  refresh() {}
}
