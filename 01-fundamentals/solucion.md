# Soluciones — 01-Fundamentals

- Server Action que devuelve fecha:
```ts
'use server';
export async function now() { return new Date().toISOString(); }
```

```tsx
// app/fecha/page.tsx
import { now } from '../actions';
export default function Fecha() {
  async function action() {
    'use server';
    return await now();
  }
  return (
    <form action={action}>
      <button type="submit">Pedir fecha</button>
    </form>
  );
}
```

- `generateStaticParams` con más slugs:
```ts
export async function generateStaticParams(){ return [{slug:'hola'},{slug:'next'},{slug:'rsc'}]; }
```

- `fetch` cacheado:
```ts
const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { next: { revalidate: 3600 } });
const post = await res.json();
```
