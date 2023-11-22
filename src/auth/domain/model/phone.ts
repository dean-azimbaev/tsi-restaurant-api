export class Phone {
  private _value: string;

  private set value(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  constructor(value: string) {
    this.value = value;
  }

  get countryCode() {
    return this.value.slice(0, 2);
  }
}
