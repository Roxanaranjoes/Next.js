# Proyecto guiado — Blog (SSG + ISR)

## Objetivo
- Blog estático con rutas dinámicas, metadata OG, y comentarios vía Server Actions.

## Pasos
- 1) Crear estructura `app/(blog)/[slug]/page.tsx` con `generateStaticParams`.
- 2) Fuente de datos en MD/MDX o JSON; `revalidate` para ISR.
- 3) OG Image dinámico (`app/og/[slug]/route.ts`).
- 4) Form de comentarios con Server Actions y revalidateTag('comments').

## Scripts
- `pnpm dev`, `pnpm build`, `pnpm start`.

## A completar
- Implementa el almacenamiento de comentarios (puede ser Prisma/SQLite) y render en el post.
