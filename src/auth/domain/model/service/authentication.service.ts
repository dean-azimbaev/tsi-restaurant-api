import { Phone } from '../phone';
import { User } from '../user';

export interface AuthenticationService {
  authenticate(phone: Phone, passwordPlain: string): Promise<User>;
}
