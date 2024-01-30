import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import { Providers } from './providers';

import './globals.css';

import "yet-another-react-lightbox/styles.css";

const inter = Public_Sans({ weight: ['400', '700', '800', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rosa Negra SPA',
  description: 'Rosa Negra najlepsza jakość ubrań w dobrej cenie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
