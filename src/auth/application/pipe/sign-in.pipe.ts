import { Injectable, PipeTransform } from '@nestjs/common';

import { SignInDTO, SignInRequestDTO } from '../dto';
import { Phone } from 'src/auth/domain';

@Injectable()
export class SiginPipe implements PipeTransform {
  transform({ phone, password }: SignInRequestDTO): SignInDTO {
    return {
      phone: Phone.create(phone),
      password,
    };
  }
}
