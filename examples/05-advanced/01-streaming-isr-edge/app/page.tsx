import { Suspense } from 'react';
import { invalidate } from './actions';

async function Slow() {
  await new Promise((r) => setTimeout(r, 1500));
  const res = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC', {
    next: { revalidate: 60, tags: ['slow'] }
  });
  const data = await res.json();
  return <pre>{data.datetime}</pre>;
}

export default function Page() {
  async function revalidate() {
    'use server';
    await invalidate();
  }
  return (
    <main>
      <h1>Streaming + ISR + Tags</h1>
      <form action={revalidate}><button>Invalidar tag "slow"</button></form>
      <Suspense fallback={<p>Cargando tiempo...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Slow />
      </Suspense>
    </main>
  );
}
