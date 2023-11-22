import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { DataSource } from 'typeorm';

import {
  AuthenticationService as IService,
  Phone,
  User,
  UserRepository,
} from '../domain';

@Injectable()
export class AuthenticationService implements IService {
  constructor(private readonly users: UserRepository) {}

  authenticate(phone: Phone, passwordPlain: string) {
    return this.users.findByPhone(phone).then((user) => {
      if (!user) {
        return null;
      }

      return bcrypt.compare(passwordPlain, user.password).then((isMatch) => {
        if (!isMatch) {
          return null;
        }

        return user;
      });
    });
  }
}
