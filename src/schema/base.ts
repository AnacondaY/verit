export interface IRule {
  name: string;
  message: string | undefined | Function;
  validator(value: any): boolean | Promise<any>;
}

export interface ISchema {
  addRule(rule: IRule): this;
  _validate(value: any, onlyFirst: boolean): Promise<any>;
}

export default class BaseSchema {
  private readonly rules: IRule[];
  constructor() {
    this.rules = [];
  }
  public addRule(rule: IRule): object {
    this.rules.push(rule);
    return this;
  }
  public required(message?: string): object {
    this.rules.unshift({
      message,
      name: 'required',
      validator: (value: any) => typeof value !== 'undefined',
    });
    return this;
  }
  public async _validate(value: any, onlyFirst: boolean): Promise<any> {
    let i;
    let valid;
    const errs = [];
    const rules = this.rules;
    for (i = 0; i < rules.length; i++) {
      const { name, message, validator } = rules[i];
      if (typeof message === 'function') {
        message = message(value);
      }
      try {
        const ret = validator(value);
        if (this.isPromise(ret)) {
          await ret;
          valid = true;
        } else if (typeof ret === 'boolean') {
          valid = ret;
        } else {
          throw new TypeError(`The type of validator return value in rule must be boolean or promise, but receives ${typeof ret}`);
        }
      } catch (err) {
        valid = false;
      }
      if (!valid) {
        errs.push(message);
        if (onlyFirst) {
          break;
        }
      }
    }
    if (errs.length === 0) {
      return null;
    }
    return errs;
  }

  private isPromise(promiseLike: any): boolean {
    return promiseLike && promiseLike.then && typeof promiseLike.then === 'function';
  }
}
