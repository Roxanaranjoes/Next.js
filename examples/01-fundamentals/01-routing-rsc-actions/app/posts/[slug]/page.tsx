export async function generateStaticParams() {
  return [{ slug: 'hola' }, { slug: 'next' }];
}

export default function Post({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Post {params.slug}</h1>
      <p>Ejemplo de ruta dinámica con SSG.</p>
    </main>
  );
}
