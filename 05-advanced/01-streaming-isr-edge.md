# 05-Advanced · Middleware/Edge, ISR avanzado, Streaming con Suspense, Tags

1) Objetivo
- Comprender streaming con `Suspense` y `loading.tsx`.
- Aplicar ISR por tiempo y por `revalidateTag`.
- Crear un Route Handler en Edge.

2) Prerequisitos
- Fundamentos y datos.

3) Diagrama ASCII

RSC -> Suspense(boundary) -> fallback inmediato
                       |-> componente asíncrono -> stream chunk

4) Conceptos clave
- `export const revalidate = 60` vs `revalidateTag`.
- Edge runtime: `export const runtime = 'edge'`.
- `loading.tsx` y streaming percibido.

5) Paso a paso
- 1. Crear página con `Suspense` y fetch con delay.
- 2. Añadir `revalidate=30` al segmento.
- 3. Implementar `revalidateTag` en una Server Action.
- 4. Route Handler en Edge que responde JSON rápido.

6) Ejemplo mínimo runnable
- Ver `examples/05-advanced/01-streaming-isr-edge/`.

7) Errores comunes
- Usar Node APIs no soportadas en Edge.
- Bloquear el render fuera de `Suspense`.

8) Performance/SEO/A11y tips
- Usa múltiples boundaries para granularidad.
- Evita suspender toda la página.

9) Ejercicios
- Añade dos boundaries anidados con diferentes delays.
- Invalida datos por múltiples tags.

10) Soluciones
- En el ejemplo, revisa `actions.ts`.

11) Quiz breve
- 1. ¿Qué activa Edge? (R: runtime='edge')
- 2. ¿Qué hace `loading.tsx`? (R: fallback durante fetch)
- 3. ¿Se puede usar `revalidate` por ruta? (R: Sí)
- 4. ¿Cómo invalidar selectivamente? (R: revalidateTag)
- 5. ¿Conviene una única boundary global? (R: No)

12) Referencias
- Streaming: https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
- Edge: https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
