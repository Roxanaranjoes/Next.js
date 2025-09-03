# Guía de depuración

## Logs (server vs client)
- Server (RSC/Route Handlers): `console.log` aparece en terminal/hosting logs.
- Client: `console.log` en DevTools. Usa `useEffect` para trazar flujos.

## Stack traces comunes
- `Error: dynamic server usage`: intentar usar APIs dinámicas en rutas estáticas. Revisa `fetch` con `cache/revalidate`.
- `Headers already sent`: respuesta duplicada en Route Handlers. Retorna una sola `Response`.
- `use client` faltante: hooks de estado/efecto en componente server. Añade la directiva.

## Consejos
- Aísla el problema: crea página mínima que lo reproduzca.
- Revisa `app/not-found.tsx` y `app/error.tsx` para UX de fallos.
- Usa `next dev --turbo` para iterar rápido (cuando aplique).
- Inspecciona `Response` en Route Handlers con `await request.json()` y validación.

## Leer errores de Next
- Mensajes suelen sugerir archivos afectados. Lee el stack de arriba abajo.
- Busca palabras clave: `cache`, `dynamic`, `revalidate`, `edge`.
- Experimenta con `export const dynamic = 'force-dynamic'` para descartar problemas de caché.
