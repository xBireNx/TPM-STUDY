import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// @ts-ignore: global CSS import has no ambient type declarations
import 'highlight.js/styles/github-dark.css';
// @ts-ignore: global CSS import has no ambient type declarations
import './globals.css';
import ClientLayout from './client-layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'TPM Study Library',
  description: 'Your complete TPM interview prep library — study plan, frameworks, deep dives, and 320+ interview questions.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📚</text></svg>",
  },
  metadataBase: new URL('https://tpm-study.vercel.app'),
  openGraph: {
    title: 'TPM Study Library',
    description: 'Your complete TPM interview prep library.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC - apply theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('tpm-theme');
                  if (!theme) theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Subtle film grain / noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
