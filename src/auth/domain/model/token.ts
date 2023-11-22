type TokenType = 'access' | 'refresh';

export class Token {
  readonly expiryDate: Date;
  readonly type: TokenType;
  readonly sub: string;

  constructor(expiryDate: Date, tokenType: TokenType, sub: string) {
    this.expiryDate = expiryDate;
    this.type = tokenType;
    this.sub = sub;
  }

  get isExpired() {
    return this.expiryDate.getTime() < Date.now();
  }
}
