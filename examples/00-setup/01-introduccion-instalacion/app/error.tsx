'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div style={{ color: 'crimson' }}>
      <strong>Ocurrió un error:</strong> {error.message}
    </div>
  );
}
