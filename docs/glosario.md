# Glosario Next.js

- RSC (React Server Components): componentes renderizados en el servidor por defecto en `app/`. Permiten enviar resultando serializado minimal a cliente.
- Client Components: componentes con `"use client"` al inicio; ejecutan en el navegador y pueden usar hooks de estado/efectos.
- ISR (Incremental Static Regeneration): regeneración de páginas estáticas tras el build usando `revalidate` o `revalidateTag`.
- Streaming: envío parcial de HTML con `Suspense` y límites de streaming; mejora TTFB y la percepción de carga.
- Middleware: función `middleware.ts` que corre antes de una request para reescrituras/redirecciones/auth.
- Edge runtime: runtime ligero (V8 isolates) de baja latencia; restringe APIs de Node; se activa con `export const runtime = 'edge'`.
- Cache: capa de memo/caché de Next/React para fetch/requests y componentes server; configurable con `cache: 'no-store'`, `revalidate`.
- revalidate: controla cuándo se rehidrata la caché de datos.
- Tags: etiquetas de caché para invalidación selectiva con `revalidateTag(tag)`.
- Route Handlers: archivos `route.ts` bajo `app/` para manejar métodos HTTP (GET/POST/etc). Reemplazan a `pages/api` en App Router.
- Server Actions: funciones `async` marcadas como `"use server"` invocables desde formularios o código cliente para mutaciones seguras.
