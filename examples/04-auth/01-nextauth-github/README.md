# Ejemplo — 04 Auth · NextAuth (GitHub)

## Env
- Crea `.env.local` con:
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu-secreto-largo
AUTH_GITHUB_ID=xxx
AUTH_GITHUB_SECRET=yyy
```

## Uso
- `pnpm install`
- `pnpm dev`

Incluye middleware para proteger `/dashboard`.
