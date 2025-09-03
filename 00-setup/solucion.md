# Soluciones — 00-Setup

- Ruta `about`:
```tsx
// app/about/page.tsx
export default function About() {
  return <main><h1>Sobre este curso</h1><p>Aprendiendo Next.js</p></main>;
}
```

- `not-found.tsx` con enlace:
```tsx
// app/not-found.tsx
import Link from 'next/link';
export default function NotFound() {
  return (
    <main>
      <h2>404 — No encontrado</h2>
      <p>Vuelve al <Link href="/">inicio</Link>.</p>
    </main>
  );
}
```

- Metadata básica:
```tsx
// app/layout.tsx
export const metadata = {
  title: 'Curso Next.js — Setup',
  description: 'Introducción al App Router',
};
```
