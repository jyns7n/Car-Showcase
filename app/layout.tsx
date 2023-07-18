import { Footer, Navbar } from '@/components';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best car in the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative bg-gradient-to-r from-gray-50 to-gray-300'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
