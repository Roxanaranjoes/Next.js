# Reto 04 — Caché por tags

Crea un wrapper `cached(key, tags, fn)` que devuelva una función memoizada simple (en memoria) para el test.

Criterios de aceptación
- Misma key devuelve resultado memoizado.
- Permite invalidar por tag con `invalidate(tag)`.
