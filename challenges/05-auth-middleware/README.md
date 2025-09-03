# Reto 05 — Auth middleware

Implementa una función `protect(pathname, session)` que devuelva `{ allow: boolean, redirect?: string }`.

Criterios de aceptación
- Si `pathname` empieza por `/dashboard` y no hay `session`, debe redirigir a `/login`.
- En caso contrario, `allow: true`.
