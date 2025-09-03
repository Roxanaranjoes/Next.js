import { increment, now } from './actions';

export default function Page() {
  async function inc() {
    'use server';
    await increment();
  }

  async function getNow() {
    'use server';
    await now();
  }

  return (
    <main>
      <h1>Fundamentals</h1>
      <form action={inc}>
        <button type="submit">Incrementar (Server Action)</button>
      </form>
      <form action={getNow}>
        <button type="submit">Fecha servidor</button>
      </form>
    </main>
  );
}
