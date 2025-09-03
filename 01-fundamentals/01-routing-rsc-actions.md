# 01-Fundamentals · Routing, RSC vs Client, Data Fetching y Server Actions

1) Objetivo
- Entender routing por archivos en `app/`.
- Distinguir RSC vs Client Components.
- Hacer data fetching con caché y SSG (`generateStaticParams`).
- Implementar una Server Action con un formulario.

2) Prerequisitos
- Haber completado 00-setup.
- Conocer props y hooks básicos de React.

3) Diagrama ASCII

URL -> app/(segmentos)/page.tsx
        |            \
        v             -> [client] "use client" (hooks)
   [server] RSC fetch -> cache/revalidate -> HTML

4) Conceptos clave
- Rutas: carpetas = segmentos; `page.tsx` maneja una ruta.
- Dinámicas: `[slug]/page.tsx`; SSG con `generateStaticParams`.
- `fetch` en RSC cachea por defecto; controlar con `cache`/`next.revalidate`.
- Server Actions: `"use server"` dentro de una función async exportada.

5) Paso a paso
- 1. Crear rutas: `app/page.tsx`, `app/acerca/page.tsx`.
- 2. Ruta dinámica: `app/posts/[slug]/page.tsx` + `generateStaticParams`.
- 3. Componente cliente: `app/client/page.tsx` con `"use client"`.
- 4. Server Action: formulario que incrementa un contador en memoria.

6) Ejemplo mínimo runnable
- Ver `examples/01-fundamentals/01-routing-rsc-actions/`.
- Fragmentos:
```tsx
// app/actions.ts
'use server';
let count = 0;
export async function increment() { count++; return count; }

// app/client/page.tsx
'use client';
import { useState } from 'react';
export default function ClientPage(){ const [n,setN]=useState(0); return <button onClick={()=>setN(n+1)}>Clicks {n}</button> }

// app/posts/[slug]/page.tsx (SSG)
export async function generateStaticParams(){ return [{ slug: 'hola' }, { slug: 'next' }]; }
export default function Post({ params }: { params: { slug: string }}) { return <h1>Post {params.slug}</h1>; }
```

7) Errores comunes
- Llamar hooks en RSC (olvidar `"use client"`).
- Usar `use server` en el archivo equivocado (debe ser función).
- No exportar `generateStaticParams` correctamente.

8) Performance/SEO/A11y tips
- Usa SSG para contenido estable.
- Añade `revalidate` para ISR si el contenido cambia.
- Evita llevar grandes libs al cliente.

9) Ejercicios
- Añade un botón que invoque una Server Action que devuelve fecha del servidor.
- Crea más slugs para `generateStaticParams` y verifica build.
- Haz `fetch` a `https://jsonplaceholder.typicode.com/posts/1` con caché y muestra el título.

10) Soluciones
- Ver `01-fundamentals/solucion.md`.

11) Quiz breve
- 1. ¿Cómo marcas un Client Component? (R: "use client")
- 2. ¿Qué export genera SSG dinámico? (R: generateStaticParams)
- 3. ¿Dónde corre una Server Action? (R: servidor)
- 4. ¿`fetch` en RSC cachea? (R: Sí por defecto)
- 5. ¿Cómo forzar dinámico? (R: export const dynamic = 'force-dynamic')

12) Referencias
- Routing: https://nextjs.org/docs/app/building-your-application/routing
- Data fetching: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
- Server Actions: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
