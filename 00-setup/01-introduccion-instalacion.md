# 00-Setup · Introducción e instalación

1) Objetivo
- Comprender qué es Next.js (App Router) y preparar el entorno local.
- Crear una app mínima con `app/`, `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`.

2) Prerequisitos
- Node 18+ y pnpm instalados.
- Conocimientos básicos de JavaScript/TypeScript y React.

3) Diagrama ASCII

Dev -> pnpm dev -> Next Dev Server
             |-> App Router -> layout -> page
                          |-> loading/error/not-found

4) Conceptos clave
- App Router y React Server Components por defecto.
- Convenciones de archivos: `app/layout.tsx`, `app/page.tsx`, y archivos especiales.
- Scripts: `dev`, `build`, `start`.
- Entornos `.env` con variables para server/client.

5) Paso a paso
- 1. Crear proyecto: `pnpm dlx create-next-app@latest ejemplo --ts --app --eslint --src-dir=false`
  - `--app`: usa App Router.
  - `--ts`: habilita TypeScript.
- 2. Ejecutar: `cd ejemplo && pnpm dev`
- 3. Añadir `loading.tsx` y `error.tsx` para UX de estados.
- 4. Configurar `.env.local` si necesitas secretos (no commitear).

6) Ejemplo mínimo runnable
- Ver `examples/00-setup/01-introduccion-instalacion/`.
- Código clave:
```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

// app/page.tsx
export default async function Page() {
  return <h1>Hola Next.js App Router</h1>;
}

// app/loading.tsx
export default function Loading() {
  return <p>Cargando...</p>;
}

// app/error.tsx
'use client';
export default function Error({ error }: { error: Error }) {
  return <pre>Ocurrió un error: {error.message}</pre>;
}

// app/not-found.tsx
export default function NotFound() {
  return <h2>404 — No encontrado</h2>;
}
```

7) Errores comunes
- Olvidar `"use client"` en `error.tsx` si usa hooks.
- Borrar `layout.tsx`: obligatorio en `app/`.
- Confundir `pages/` con `app/` (en App Router no uses `pages/`).

8) Performance/SEO/A11y tips
- Usa `lang="es"` en `<html>`.
- Añade metadata con `export const metadata = {...}` en `layout.tsx`.
- Evita grandes bundles en cliente; prefiere RSC.

9) Ejercicios
- Crea `app/about/page.tsx` con un texto y `not-found.tsx` que enlace a inicio.
- Añade `loading.tsx` en una ruta anidada simulando delay.
- Define metadata básica (`title`, `description`).

10) Soluciones
- Ver `00-setup/solucion.md`.

11) Quiz breve
- 1. ¿Qué archivo es obligatorio en `app/`? (R: layout.tsx)
- 2. ¿Qué directiva activa Client Components? (R: "use client")
- 3. ¿Dónde va `loading.tsx`? (R: en el segmento donde aplica)
- 4. ¿Qué comando inicia dev server? (R: pnpm dev)
- 5. ¿Se usa `pages/` con App Router? (R: No)

12) Referencias
- Docs App Router: https://nextjs.org/docs/app
- Especial files: https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
