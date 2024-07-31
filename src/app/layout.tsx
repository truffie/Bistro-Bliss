import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bistro Bliss',
  description: 'Bistro Bliss - best food for your taste',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
