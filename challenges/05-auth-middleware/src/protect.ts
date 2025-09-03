export function protect(pathname: string, session: unknown){
  if (pathname.startsWith('/dashboard') && !session) return { allow: false, redirect: '/login' } as const;
  return { allow: true } as const;
}
