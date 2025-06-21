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

export function reportWebVitals({
  id,
  name,
  value,
}: {
  id: string;
  name: string;
  value: number;
}) {
  if (!window.gtag) return;

  window.gtag('event', name, {
    event_category: 'web-vitals',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate
  });
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
