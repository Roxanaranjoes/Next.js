import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = { title: 'Styling', description: 'Tailwind + CSS Modules' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} p-6`}>{children}</body>
    </html>
  );
}
