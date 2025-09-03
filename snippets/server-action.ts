"use server";

// Patrón seguro de Server Actions con validación básica y revalidación por tag
// Uso: importar en un formulario y llamarla vía action.

import { revalidateTag } from "next/cache";

type Result<T> = { ok: true; data: T } | { ok: false; error: string };

export async function withSafeAction<T>(fn: () => Promise<T>, opts?: { tag?: string }) {
  try {
    const data = await fn();
    if (opts?.tag) revalidateTag(opts.tag);
    return { ok: true, data } as Result<T>;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Error desconocido";
    return { ok: false, error: msg } as Result<T>;
  }
}

// Ejemplo:
// export async function crearPost(formData: FormData) {
//   const titulo = String(formData.get('titulo') || '').trim();
//   if (!titulo) return { ok: false, error: 'Título requerido' } as const;
//   return withSafeAction(async () => db.post.create({ data: { titulo } }), { tag: 'posts' });
// }
