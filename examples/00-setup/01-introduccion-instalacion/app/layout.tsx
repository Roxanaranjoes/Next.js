export const metadata = {
  title: 'Ejemplo Setup',
  description: 'App mínima con App Router'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>{children}</body>
    </html>
  );
}
