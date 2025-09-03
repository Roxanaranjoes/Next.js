import Link from 'next/link';
import { auth } from './auth';

export default async function Page() {
  const session = await auth();
  return (
    <main>
      <h1>Auth Demo</h1>
      {session ? (
        <>
          <p>Hola, {session.user?.name}</p>
          <Link href="/dashboard">Ir al dashboard</Link>
        </>
      ) : (
        <a href="/api/auth/signin">Iniciar sesión</a>
      )}
    </main>
  );
}
