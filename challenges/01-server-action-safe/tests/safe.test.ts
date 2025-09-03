import { describe, it, expect } from 'vitest';
import { withSafeAction } from '../src/safe';

describe('withSafeAction', () => {
  it('retorna ok true al resolver', async () => {
    const res = await withSafeAction(async () => 42);
    expect(res).toEqual({ ok: true, data: 42 });
  });
  it('captura errores', async () => {
    const res = await withSafeAction(async () => { throw new Error('x'); });
    expect(res.ok).toBe(false);
  });
});
