# nextjs-mastery-es

Repositorio educativo (en español) para aprender Next.js (App Router) desde cero hasta avanzado. Diseñado para principiantes con explicaciones paso a paso y para perfiles intermedios que buscan profundidad técnica.

- Tecnologías: Next.js (App Router, Server Components, Route Handlers, Server Actions), TypeScript, Node 18+, pnpm, Tailwind opcional.
- Incluye: lecciones con secciones didácticas fijas, ejemplos ejecutables por lección, snippets, proyectos guiados, retos con tests, checklists, docs y CI.

## Requisitos
- Node.js 18+ (recomendado 20)
- pnpm 8+

## Instalación rápida (raíz)
- Este repo no es una app única, sino un compendio. Cada ejemplo bajo `examples/` es una app Next.js separada con su propio `package.json`.
- Para ejecutar un ejemplo: ver su `README.md` dentro de la carpeta del ejemplo.

## Estructura
- 00-setup
- 01-fundamentals
- 02-styling
- 03-data
- 04-auth
- 05-advanced
- 06-testing
- 07-deploy
- projects/
- snippets/
- challenges/
- checklists/
- examples/
- docs/

## Tabla de contenidos
- Módulo 00 — Setup: `00-setup/`
- Módulo 01 — Fundamentos: `01-fundamentals/`
- Módulo 02 — Estilos: `02-styling/`
- Módulo 03 — Datos: `03-data/`
- Módulo 04 — Auth: `04-auth/`
- Módulo 05 — Avanzado: `05-advanced/`
- Módulo 06 — Testing: `06-testing/`
- Módulo 07 — Deploy: `07-deploy/`
- Snippets reutilizables: `snippets/`
- Retos prácticos con tests: `challenges/`
- Proyectos guiados: `projects/`
- Documentos de apoyo: `docs/`
- Checklist de calidad: `checklists/feature-readiness.md`

## Cómo usar este repo
- Lee cada lección en orden. Cada una incluye: objetivo, prerequisitos, diagrama ASCII, conceptos clave, paso a paso, ejemplo mínimo runnable, errores comunes, tips de performance/SEO/A11y, ejercicios (con soluciones), quiz y referencias.
- Ejecuta el ejemplo asociado a cada lección bajo `examples/<modulo>/<leccion>/`.
- Usa `snippets/` como referencia rápida de patrones.

## Scripts (raíz)
- `pnpm typecheck`: verificación de tipos (TS) del repo.
- `pnpm lint`: linting con ESLint.
- `pnpm fmt`: chequeo de formato Prettier.
- `pnpm fmt:write`: aplicar formato.
- `pnpm test`: ejecutar tests (retos, ejemplos con pruebas);
- `pnpm e2e`: Playwright (en ejemplos/proyectos que lo incluyan).

Nota: muchos tests residen dentro de ejemplos/proyectos; ejecuta sus scripts locales según su `README.md`.

## Roadmap
- [x] Estructura base y CI
- [ ] Completar y ampliar proyectos guiados
- [ ] Añadir más retos y pruebas E2E

## Licencia
MIT — ver `LICENSE`.
