# Soluciones — 02-Styling

- Toggle dark mode:
```tsx
'use client';
import { useEffect, useState } from 'react';
export function ThemeToggle(){
  const [dark,setDark]=useState(false);
  useEffect(()=>{ document.documentElement.classList.toggle('dark', dark); },[dark]);
  return <button onClick={()=>setDark(d=>!d)}>{dark? 'Claro':'Oscuro'}</button>;
}
```

- Grid responsive con Image:
```tsx
import Image from 'next/image';
export function Gallery(){
  const imgs=['/img1.jpg','/img2.jpg'];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {imgs.map((src)=> (
        <Image key={src} src={src} alt="demo" width={600} height={400} className="rounded" />
      ))}
    </div>
  );
}
```
