import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { KanbanProvider } from './lib/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'カンバンボード',
  description: 'ローカルファイルに保存するカンバン方式のタスク管理',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <KanbanProvider>
          {children}
        </KanbanProvider>
      </body>
    </html>
  );
}
