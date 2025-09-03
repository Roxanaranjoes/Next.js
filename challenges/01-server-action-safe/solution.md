# Solución — Reto 01

```ts
import { revalidateTag } from 'next/cache';

export type Result<T> = { ok: true; data: T } | { ok: false; error: string };
export async function withSafeAction<T>(fn: () => Promise<T>, opts?: { tag?: string }): Promise<Result<T>> {
  try {
    const data = await fn();
    if (opts?.tag) revalidateTag(opts.tag);
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Error' };
  }
}
```
