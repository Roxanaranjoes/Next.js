'use server';
import { prisma } from '../lib/prisma';
import { revalidateTag } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = String(formData.get('title') || '').trim();
  const content = String(formData.get('content') || '').trim();
  if (!title) return;
  await prisma.post.create({ data: { title, content } });
  revalidateTag('posts');
}

export async function deletePost(id: number) {
  await prisma.post.delete({ where: { id } });
  revalidateTag('posts');
}
