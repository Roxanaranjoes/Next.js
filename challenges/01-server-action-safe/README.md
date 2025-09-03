# Reto 01 — Server Action segura

Implementa una utilidad `withSafeAction(fn, { tag })` que:
- Ejecute `fn()` dentro de `try/catch`.
- Retorne `{ ok:true, data }` o `{ ok:false, error }`.
- Si hay `tag`, invoque `revalidateTag(tag)`.

Criterios de aceptación
- Maneja errores correctamente.
- Tipado genérico de `data`.

Ejecuta tests: `pnpm test` (en raíz) o dentro de la carpeta con Vitest.
