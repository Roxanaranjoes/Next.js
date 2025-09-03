# Solución — Reto 05

```ts
export function protect(pathname: string, session: unknown){
  if (pathname.startsWith('/dashboard') && !session) return { allow: false, redirect: '/login' };
  return { allow: true };
}
```
