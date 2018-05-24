import NumberSchema from './number';
import StringSchema from './string';

enum langList {
  'en',
  'zh-CN',
}

const Schema = {
  number: (message?: string) => new NumberSchema(message),
  string: (message?: string) => new StringSchema(message),
};

export default Schema;
