import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'USIL Cursos Online',
  description: 'Tienda online de cursos para estudiantes y profesionales de USIL.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
