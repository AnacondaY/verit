import { ISchema } from "../schema/base";

type opts = {
  onlyFirstRule?: boolean,
  onlyFirstField?: boolean,
};

type schemes = {
  [field: string]: object,
};

type valueMap = {
  [field: string]: any,
};

type result = {
  [field: string]: boolean,
};

const defaultOpts = {
  onlyFirstField: false,
  onlyFirstRule: false,
};

export default class Verit {
  private readonly schemaMap: schemes;
  constructor(schemaMap: schemes) {
    this.schemaMap = schemaMap;
  }
  public async validate(values: valueMap, options ?: opts) {
    const { onlyFirstField, onlyFirstRule } = {
      ...defaultOpts,
      ...options,
    };
    const fields = Object.keys(this.schemaMap);
    const ret: result = {};
    let i;
    let field;
    let schema;
    let value;
    for (i = 0; i < fields.length; i++) {
      field = fields[i];
      value = values[field];
      schema = this.schemaMap[field];
      ret[field] = await schema._validate(value, onlyFirstRule);
      if (onlyFirstField) {
        break;
      }
    }
    return ret;
  }
}
