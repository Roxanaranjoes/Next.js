import { describe, it, expect } from 'vitest';
import { cached, invalidate } from '../src/cache';

describe('cached + invalidate', () => {
  it('memoiza por key y permite invalidar', async () => {
    let calls = 0;
    const fn = async () => { calls++; return 7; };
    const c = cached('k1', ['t1'], fn);
    expect(await c()).toBe(7);
    expect(await c()).toBe(7);
    expect(calls).toBe(1);
    invalidate('t1');
    await c();
    expect(calls).toBe(2);
  });
});
