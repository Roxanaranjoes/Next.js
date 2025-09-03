import { auth } from '../auth';

export default async function Dashboard() {
  const session = await auth();
  return (
    <main>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
