import { prisma } from '../../../lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
  return Response.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const post = await prisma.post.create({ data: { title: String(body.title||''), content: body.content ? String(body.content) : null } });
  return Response.json(post, { status: 201 });
}
