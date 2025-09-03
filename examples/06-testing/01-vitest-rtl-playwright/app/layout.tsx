export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
        <nav><a href="/about">About</a></nav>
        {children}
      </body>
    </html>
  );
}
