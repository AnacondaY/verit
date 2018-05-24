import BaseSchema, { IRule } from './base';

export default class NumberSchema extends BaseSchema {
  constructor(message?: string) {
    super();
    super.addRule({
      message,
      name: 'number',
      validator: (value: any) => typeof value === 'number',
    });
  }
  public integer(message?: string): object {
    super.addRule({
      message,
      name: 'integer',
      validator: (value: any) => /^\d+$/.test(value),
    });
    return this;
  }
  public passive(message?: string): object {
    return this;
  }
  public finite(message?: string): object {
    super.addRule({
      message,
      name: 'finite',
      validator: (value: any) => isFinite(value),
    });
    return this;
  }
  public float(message?: string): object {
    return this;
  }
  public greaterThan(threshold: number, message?: string) {
    super.addRule({
      message,
      name: 'greaterThan',
      validator: (value: any) => value > threshold,
    });
    return this;
  }
}
