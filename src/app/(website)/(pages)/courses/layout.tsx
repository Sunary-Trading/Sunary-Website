import type { Metadata } from "next";
import SEO from "@/config/SEO.json";

export const metadata: Metadata = {
  title: SEO.Index.title,
  description: SEO.Index.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
