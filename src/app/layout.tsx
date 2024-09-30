import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@layout/Header/Header';
import { Footer } from '@layout/Footer/Footer';
import { StoreProvider } from './store/StoreProvider';

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
    <StoreProvider >
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
