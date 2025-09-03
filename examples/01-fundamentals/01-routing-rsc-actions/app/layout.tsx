export const metadata = { title: 'Fundamentals', description: 'Routing, RSC y Actions' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <a href="/">Inicio</a>
          <a href="/client">Cliente</a>
          <a href="/posts/hola">Post hola</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
