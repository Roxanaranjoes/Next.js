# Soluciones — 03-Data

- Modelo con `published`:
```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

- Update título (Server Action):
```ts
'use server';
import { prisma } from '../lib/prisma';
import { revalidateTag } from 'next/cache';
export async function updateTitle(id: number, title: string){
  await prisma.post.update({ where: { id }, data: { title } });
  revalidateTag('posts');
}
```
