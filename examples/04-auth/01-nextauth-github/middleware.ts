import { NextResponse } from 'next/server';
import { auth } from './app/auth';

export async function middleware(req: Request) {
  const session = await auth();
  const url = new URL(req.url);
  if (url.pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/dashboard'] };
