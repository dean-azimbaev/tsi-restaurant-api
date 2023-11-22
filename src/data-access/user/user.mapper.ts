import { User } from 'src/auth/domain';

import { UserDA } from './user.schema';

export class UserMapper {
  static toDomain({ id, phone, password }: UserDA): User {
    const user = new User();
    //@ts-ignore
    user.id = id;
    //@ts-ignore
    user.phone = phone;
    //@ts-ignore
    user.password = password;
    return user;
  }
}
