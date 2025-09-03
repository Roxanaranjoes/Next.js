import { prisma } from '../lib/prisma';
import { createPost, deletePost } from './actions';

async function getPosts() {
  'use server';
  return prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
}

export const dynamic = 'force-dynamic';

export default async function Page() {
  const posts = await getPosts();
  return (
    <main>
      <h1>Posts</h1>
      <form action={createPost} style={{ display: 'grid', gap: 8, maxWidth: 480 }}>
        <input name="title" placeholder="Título" required />
        <textarea name="content" placeholder="Contenido (opcional)" />
        <button type="submit">Crear</button>
      </form>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.content}
            <form action={async () => deletePost(p.id)} style={{ display: 'inline' }}>
              <button type="submit" style={{ marginLeft: 8 }}>Eliminar</button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
