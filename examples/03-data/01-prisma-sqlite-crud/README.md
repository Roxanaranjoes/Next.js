# Ejemplo — 03 Data · Prisma + SQLite

## Uso
- Configura `.env` con `DATABASE_URL="file:./dev.db"`
- Instala deps: `pnpm install`
- Inicializa DB: `pnpm prisma db push`
- Dev: `pnpm dev`

Incluye CRUD básico de Post con Server Actions y revalidateTag('posts').
