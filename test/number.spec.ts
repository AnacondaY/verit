import Verit, { Schema } from '../src';

describe('===== number validator =====', () => {

  it('typeof number validating', async () => {
    const verit = new Verit({
      field: Schema.number('expect number'),
    });
    const ret1 = await verit.validate({ field: 123 });
    const ret2 = await verit.validate({ field: '123' });
    expect(ret1['field']).toBeNull();
    expect(ret2['field'][0]).toBe('expect number');
  });

  it('typeof integer validating', async () => {
    const verit = new Verit({
      field: Schema.number().integer('expect integer'),
    });
    const ret = await verit.validate({ field: 99.99 });
    expect(ret['field'][0]).toBe('expect integer');
  });
});
