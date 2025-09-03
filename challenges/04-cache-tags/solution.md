# Solución — Reto 04

```ts
const store = new Map<string, any>();
const tagIndex = new Map<string, Set<string>>();
export function cached<TArgs extends any[], TResult>(key: string, tags: string[], fn: (...args:TArgs)=>Promise<TResult>) {
  return async (...args: TArgs) => {
    if (store.has(key)) return store.get(key) as TResult;
    const val = await fn(...args);
    store.set(key, val);
    for (const t of tags) {
      const set = tagIndex.get(t) ?? new Set();
      set.add(key); tagIndex.set(t, set);
    }
    return val;
  };
}
export function invalidate(tag: string){
  const keys = tagIndex.get(tag);
  if (!keys) return;
  for (const k of keys) store.delete(k);
  tagIndex.delete(tag);
}
```
