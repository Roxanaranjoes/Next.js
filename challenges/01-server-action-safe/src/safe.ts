export type Result<T> = { ok: true; data: T } | { ok: false; error: string };

// Implementa esta función (sin dependencia real de next/cache para test)
export async function withSafeAction<T>(fn: () => Promise<T>, opts?: { tag?: string }): Promise<Result<T>> {
  try {
    const data = await fn();
    // Aquí llamaríamos revalidateTag(opts.tag) si existiera
    void opts;
    return { ok: true, data } as const;
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Error';
    return { ok: false, error: msg } as const;
  }
}
