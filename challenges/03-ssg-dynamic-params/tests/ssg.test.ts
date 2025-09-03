import { describe, it, expect } from 'vitest';
import { generateStaticParams } from '../src/ssg';

describe('generateStaticParams', () => {
  it('devuelve al menos 3 slugs', async () => {
    const res = await generateStaticParams();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });
});
