# 04-Auth · NextAuth (GitHub), Middleware y Sesión en RSC

1) Objetivo
- Configurar NextAuth con OAuth GitHub.
- Proteger `/dashboard` con `middleware.ts`.
- Leer sesión en RSC y Client Components.

2) Prerequisitos
- Cuenta GitHub OAuth app (Client ID/Secret) y `NEXTAUTH_SECRET`.

3) Diagrama ASCII

Req -> middleware.ts (check session) -> /dashboard?
  |          | yes                      | no
  |          v                          v
  |       pasa                   redirect /api/auth/signin
  v
RSC lee session -> render

4) Conceptos clave
- NextAuth App Router: `auth.ts` y `handlers.ts`.
- Provider GitHub.
- `auth()` en RSC para cargar la sesión server-side.

5) Paso a paso
- 1. Instalar `next-auth`.
- 2. Configurar `auth.ts` con provider GitHub.
- 3. Exponer `app/api/auth/[...nextauth]/route.ts`.
- 4. Añadir `middleware.ts` que protege `/dashboard`.

6) Ejemplo mínimo runnable
- Ver `examples/04-auth/01-nextauth-github/`.

7) Errores comunes
- Falta `NEXTAUTH_URL`/`NEXTAUTH_SECRET` en `.env`.
- Callback URL mal configurada en GitHub App.
- Usar `getServerSession` versión Pages Router en App Router (usa `auth()`).

8) Performance/SEO/A11y tips
- Evita mostrar contenido privado antes de confirmar sesión.
- Usa enlaces y estados de carga accesibles.

9) Ejercicios
- Mostrar avatar y nombre en navbar.
- Añadir botón de sign out.
- Proteger ruta adicional `/settings`.

10) Soluciones
- Ver `04-auth/solucion.md`.

11) Quiz breve
- 1. ¿Dónde se define el provider? (R: auth.ts)
- 2. ¿Qué protege rutas antes del handler? (R: middleware)
- 3. ¿Cómo leo sesión en RSC? (R: await auth())
- 4. ¿Qué var es obligatoria? (R: NEXTAUTH_SECRET)
- 5. ¿Ruta de NextAuth en App Router? (R: app/api/auth/[...nextauth]/route.ts)

12) Referencias
- NextAuth v5 (App Router): https://authjs.dev/guides/upgrade-to-v5
- Next.js middleware: https://nextjs.org/docs/app/building-your-application/routing/middleware
