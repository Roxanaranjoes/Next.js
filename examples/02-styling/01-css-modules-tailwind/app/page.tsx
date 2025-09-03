'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';

export default function Page() {
  const [dark, setDark] = useState(false);
  return (
    <main className="space-y-4">
      <button
        className="px-3 py-1 border rounded"
        onClick={() => {
          document.documentElement.classList.toggle('dark');
          setDark((d) => !d);
        }}
      >
        Modo {dark ? 'oscuro' : 'claro'}
      </button>
      <div className={styles.card}>
        <h1 className={styles.title}>Styling con Tailwind + CSS Modules</h1>
        <p>Inter (next/font) aplicado en body.</p>
        <Image src="https://picsum.photos/600/300" alt="demo" width={600} height={300} priority />
      </div>
    </main>
  );
}
