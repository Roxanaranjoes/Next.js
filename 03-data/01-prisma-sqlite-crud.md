# 03-Data · Prisma + SQLite, CRUD con Server Actions y Route Handlers

1) Objetivo
- Configurar Prisma con SQLite.
- Implementar CRUD de `Post` con Server Actions + revalidación por tag.
- Diferenciar Route Handlers vs (antiguas) API Routes.

2) Prerequisitos
- Node 18+, pnpm.
- Haber leído Fundamentals.

3) Diagrama ASCII

Form -> Server Action -> Prisma (SQLite)
   |        |              |
   |        +-> revalidateTag('posts')
   v                       |
UI (RSC) <- fetch next:{ tags:['posts'] }

4) Conceptos clave
- Prisma Client: tipado y consultas.
- `schema.prisma`: modelo `Post`.
- `revalidateTag` para invalidar listas tras mutar.
- Route Handler (`app/api/posts/route.ts`) para REST cuando necesites endpoints.

5) Paso a paso
- 1. Instalar Prisma y crear schema.
- 2. Generar cliente y hacer `db push`.
- 3. Crear Server Actions para create/delete.
- 4. Listar posts con `fetch` taggeado o acceso directo a Prisma en RSC.

6) Ejemplo mínimo runnable
- Ver `examples/03-data/01-prisma-sqlite-crud/`.

7) Errores comunes
- Olvidar `DATABASE_URL`.
- No ejecutar `prisma generate`/`db push`.
- Llamar Prisma en Edge runtime (no soportado por SQLite).

8) Performance/SEO/A11y tips
- Minimiza roundtrips: en RSC puedes leer directamente de Prisma (server).
- Usa `tags` para invalidaciones precisas.
- Accesibilidad en formularios (labels, focus).

9) Ejercicios
- Añade `published:boolean` y filtro.
- Implementa update de título.
- Agrega paginación server-side.

10) Soluciones
- Ver `03-data/solucion.md`.

11) Quiz breve
- 1. ¿Dónde define Prisma el modelo? (R: schema.prisma)
- 2. ¿Cómo invalidas una lista? (R: revalidateTag('posts'))
- 3. ¿Puede Prisma SQLite correr en Edge? (R: No)
- 4. ¿Qué comando aplica schema? (R: prisma db push)
- 5. ¿Dónde van Route Handlers? (R: app/api/.../route.ts)

12) Referencias
- Prisma: https://www.prisma.io/docs
- Data fetching tags: https://nextjs.org/docs/app/building-your-application/caching#data-cache
