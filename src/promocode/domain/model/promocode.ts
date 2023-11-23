//@ts-nocheck
import { PromocodeStatus } from './promocode-status';

export class Promocode {
  readonly activatedAt: Date = null;
  readonly appliedAt: Date = null;
  readonly appliedBy: string = null;

  readonly status: PromocodeStatus;

  constructor(readonly code: string) {
    this.status = PromocodeStatus.Inactive();
  }

  activate() {
    this.ensureCanActivate();
    this.status = PromocodeStatus.Active();
    this.activatedAt = new Date();
    //think about domain events
  }

  apply(userId: string) {
    this.ensureCanApply();
    this.status = PromocodeStatus.Applied();
    this.appliedAt = new Date();
    this.appliedBy = userId;
    //think about domain events
  }

  private ensureCanActivate() {
    if (this.status.isApplied()) {
      throw new Error('Promocode already applied');
    }
    if (this.status.isActive()) {
      throw new Error('Promocode already activated');
    }
  }

  private ensureCanApply() {
    if (!this.status.isActive()) {
      throw new Error('Promocode not available for applying');
    }
  }
}
