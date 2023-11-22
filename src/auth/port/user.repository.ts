import { DataSource } from 'typeorm';
import { UserMapper, UserDA } from 'src/data-access';
import {
  User,
  UserRepository as IRepository,
  UserRole,
  Phone,
} from '../domain';

export class UserRepostiory implements IRepository {
  constructor(private readonly ds: DataSource) {}

  findByPhone(phone: Phone): Promise<User> {
    return this.ds.manager
      .findOne(UserDA, { where: { phone } })
      .then((user) => (user ? UserMapper.toDomain(user) : null));
  }

  findById(id: string): Promise<User> {
    return this.ds.manager
      .findOne(UserDA, { where: { id } })
      .then((user) => (user ? UserMapper.toDomain(user) : null));
  }

  rolesOf(userId: string): Promise<UserRole[]> {
    return this.ds.manager
      .findOne(UserDA, { where: { id: userId } })
      .then((user) => (user ? user.roles : []));
  }
}
