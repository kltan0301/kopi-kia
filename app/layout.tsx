import type { Metadata } from 'next';
import styles from './App.module.css';

export const metadata: Metadata = {
  title: 'Kopi Kia',
  description: 'Your friendly Kopi assistant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.mainContainer} suppressHydrationWarning>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
