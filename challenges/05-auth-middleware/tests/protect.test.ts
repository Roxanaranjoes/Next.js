import { describe, it, expect } from 'vitest';
import { protect } from '../src/protect';

describe('protect', () => {
  it('redirige si no hay session en /dashboard', () => {
    expect(protect('/dashboard', null)).toEqual({ allow: false, redirect: '/login' });
  });
  it('permite si hay session', () => {
    expect(protect('/dashboard', { user: 1 })).toEqual({ allow: true });
  });
  it('permite rutas públicas', () => {
    expect(protect('/', null)).toEqual({ allow: true });
  });
});
