import { describe, it, expect } from 'vitest';
import { GET } from '../src/edge';

describe('edge GET', () => {
  it('retorna json ok:true', async () => {
    const res = await GET();
    expect(res.headers.get('content-type')).toContain('application/json');
    const data = await res.json();
    expect(data).toEqual({ ok: true });
  });
});
