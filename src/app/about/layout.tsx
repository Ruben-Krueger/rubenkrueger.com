import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Create Next App",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
} 