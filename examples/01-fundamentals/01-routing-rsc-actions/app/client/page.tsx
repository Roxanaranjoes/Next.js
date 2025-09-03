'use client';
import { useState } from 'react';

export default function ClientPage() {
  const [n, setN] = useState(0);
  return (
    <main>
      <h1>Cliente</h1>
      <button onClick={() => setN((x) => x + 1)}>Clicks: {n}</button>
    </main>
  );
}
