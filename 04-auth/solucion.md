# Soluciones — 04-Auth

- Navbar con avatar/nombre (Client):
```tsx
'use client';
import { useSession } from 'next-auth/react';
export function Navbar(){
  const { data } = useSession();
  return (
    <nav>
      {data?.user ? (
        <>
          <img src={data.user.image ?? ''} alt="avatar" width={28} height={28} />
          <span>{data.user.name}</span>
        </>
      ) : 'No autenticado'}
    </nav>
  );
}
```

- Sign out button:
```tsx
'use client';
import { signOut } from 'next-auth/react';
export function SignOut(){ return <button onClick={()=>signOut()}>Salir</button>; }
```
