import BaseSchema, { IRule, ISchema } from './base';

export default class StringSchema extends BaseSchema {
  constructor(message?: string) {
    super();
    super.addRule({
      message,
      name: 'string',
      validator: (value: any) => typeof value === 'string',
    });
  }
  public email(message?: string) {
    super.addRule({
      message,
      name: 'email',
      validator: (value: any) => /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value),
    });
    return this;
  }
  public chinese(message?: string) {
    super.addRule({
      message,
      name: 'chinese',
      validator: (value: any) => /^[\\u4e00-\\u9fa5]{0,}$/.test(value),
    });
    return this;
  }
  public ipv4(message?: string) {
    super.addRule({
      message,
      name: 'ipv4',
      validator: (value: any) => /\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b/.test(value),
    });
    return this;
  }
  public ipv6(message?: string) {
    super.addRule({
      message,
      name: 'ipv6',
      validator: (value: any) => /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(value),
    });
    return this;
  }
  // url(message?: string){
  //   super.addRule({

  //   });
  //   return this;
  // }
}
