import { unstable_cache, revalidateTag } from 'next/cache';

// Cache helper con tags. Útil para envolver llamados costosos.
export function cached<TArgs extends any[], TResult>(
  key: string,
  tags: string[],
  fn: (...args: TArgs) => Promise<TResult>,
  revalidate?: number
) {
  const cachedFn = unstable_cache(fn, [key], { tags, revalidate });
  return async (...args: TArgs) => cachedFn(...args);
}

export function invalidate(tag: string) {
  revalidateTag(tag);
}
