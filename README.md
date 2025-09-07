# nextjs-mastery-es

Repositorio educativo (en español) para aprender Next.js (App Router) desde cero hasta avanzado. Pensado para principiantes con guías paso a paso y para perfiles intermedios que buscan profundidad técnica.

- Tecnologías: Next.js (App Router, Server Components, Route Handlers, Server Actions), TypeScript, Node 18+, pnpm, Tailwind opcional.
- Incluye: lecciones, ejemplos ejecutables por lección, snippets, proyectos guiados, retos con tests, checklists, docs y CI.

## Requisitos
- Node.js 18+ (recomendado 20)
- pnpm 8+ (en raíz se usa pnpm 8.15.0)

## Instalación rápida (raíz)
- Este repo no es una única app, sino un compendio. Cada ejemplo en `examples/` es una app Next.js independiente con su propio `package.json`.
- Para ejecutar un ejemplo, entra a su carpeta y sigue su README.

## Estructura
- 00-setup — Introducción e instalación.
- 01-fundamentals — Fundamentos de App Router.
- 02-styling — CSS Modules, Tailwind, etc.
- 03-data — Datos, fetch, Prisma.
- 04-auth — Autenticación con NextAuth.
- 05-advanced — Streaming, ISR, Edge.
- 06-testing — Vitest, RTL, Playwright.
- 07-deploy — Despliegue (Vercel, etc.).
- challenges/ — Retos prácticos con tests.
- snippets/ — Fragmentos reutilizables.
- projects/ — Proyectos guiados.
- examples/ — Apps de ejemplo por lección.
- checklists/ — Listas de verificación.
- docs/ — Documentos de apoyo.

## Cómo usar este repo
- Sigue los módulos en orden. Cada lección incluye objetivo, prerequisitos, conceptos clave, paso a paso, ejemplo mínimo runnable, errores comunes, tips de performance/SEO/A11y y ejercicios.
- Ejecuta el ejemplo asociado a cada lección en `examples/<módulo>/<lección>/`.
- Usa `snippets/` como referencia rápida de patrones.

## Scripts (raíz)
- `pnpm typecheck`: verificación de tipos del monorepo (excluye `examples/` y `snippets/`).
- `pnpm lint`: linting con ESLint (ignora `examples/` y `snippets/`).
- `pnpm fmt`: chequeo de formato con Prettier.
- `pnpm fmt:write`: aplica formato.
- `pnpm test`: ejecuta tests de retos en `challenges/**/tests/**/*.test.ts` (Vitest).
- `pnpm e2e`: Playwright (solo en ejemplos/proyectos que lo incluyan).

Notas
- Los ejemplos requieren instalar sus dependencias dentro de cada carpeta. Usa sus scripts locales (`pnpm install`, `pnpm dev`).
- Para correr un test específico de retos: `pnpm test -t "<nombre o regex>"`.

## CI/CD
- Workflow: `.github/workflows/ci.yml` (Node 20 + pnpm 8.15.0).
- Se ejecutan `typecheck`, `lint` y `test` en la raíz con el alcance descrito arriba.
- Caché de pnpm desactivada hasta añadir `pnpm-lock.yaml` en raíz. Recomendado crear el lockfile para habilitar caché.

## Recomendaciones
- Usa un Node version manager (fnm, nvm) para fijar Node 20.
- Genera `pnpm-lock.yaml` en raíz para mejorar tiempos de CI: `pnpm install` y commitea el lock.

## Roadmap
- [x] Estructura base y CI
- [ ] Ampliar proyectos guiados
- [ ] Añadir más retos y E2E

## Licencia
MIT — ver `LICENSE`.

