export interface JWTOptions {
  /** Время жизни токена доступа в секундах */
  expiresIn: number;
  secret: string;
}
