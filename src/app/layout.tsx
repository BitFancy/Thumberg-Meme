import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';

import './globals.css';

import { cn, constructMetadata } from '@/lib/utils';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from '@/components/providers/providers';

const recursive = Recursive({
  subsets: ['latin-ext'],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(recursive.className, 'grainy-light')}>
        <Providers>
          <Navbar />
          <main className='flex min-h-[calc(100vh-3.5rem-1px)] flex-col'>
            <div className='flex h-full flex-1 flex-col'>{children}</div>
          </main>
        </Providers>

        <Footer />
      </body>
    </html>
  );
}
