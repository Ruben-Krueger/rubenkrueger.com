import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'Ruben Krueger',
  description:
    "Ruben Krueger's personal website - a software engineer, runner, and motorcyclist",
};

declare global {
  interface Window {
    gtag?: (
      event: 'event',
      eventName: string,
      eventParams: { [key: string]: string | number | boolean }
    ) => void;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-X4JBEHSY2E" />
    </html>
  );
}
