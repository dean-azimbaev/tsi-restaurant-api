import { Token } from '../token';
import { User } from '../user';

export interface TokenService {
  sign(user: User): Promise<[string, string]>;
  refresh(jwt: string): Promise<string>;
  verify(token: string): Promise<Token>;
}
