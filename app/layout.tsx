import type { Metadata } from 'next';
import styles from './App.module.css';

export const metadata: Metadata = {
  title: 'Next.js on GitHub Pages',
  description: 'Deploy your static Next.js site to GitHub Pages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.mainContainer}>
        <body>{children}</body>
    </html>
  );
}
