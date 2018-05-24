import Verit, { Schema } from '../src';

describe('===== asynchronmous validator =====', () => {
  const mockRequest = (success: boolean) => new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject();
      }
    }, Math.random() * 1000);
  });

  it('validating with promise', async () => {
    const verit = new Verit({
      field: Schema.string().addRule({
        message: 'validating error',
        name: 'async',
        validator: (value: any) => mockRequest(true),
      }),
    });
    const ret = await verit.validate({ field: 'any' });
    expect(ret['field']).toBeNull();
  });
});
