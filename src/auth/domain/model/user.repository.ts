import { User } from './user';
import { UserRole } from '../../domain/enum';
import { Phone } from './phone';

export interface UserRepository {
  findByPhone(phone: Phone): Promise<User>;
  findById(id: string): Promise<User>;
  rolesOf(userId: string): Promise<UserRole[]>;
}
