import { PromocodeStatus as Status } from '../enum';

export class PromocodeStatus {
  private constructor(readonly value: Status) {}

  static create(status: Status) {
    return new PromocodeStatus(status);
  }

  static Active = () => PromocodeStatus.create(Status.ACTIVE);
  static Applied = () => PromocodeStatus.create(Status.APPLIED);
  static Inactive = () => PromocodeStatus.create(Status.INACTIVE);

  isActive() {
    return this.value === Status.ACTIVE;
  }

  isApplied() {
    return this.value === Status.APPLIED;
  }

  isInactive() {
    return this.value === Status.INACTIVE;
  }
}
