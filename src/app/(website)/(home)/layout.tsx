import type { Metadata } from "next";
import ProgressBarProvider from "@/components/ProgressBarProvider"; // 新增的 Client Component
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
  return (
    <html lang="en">
      <body>
        <ProgressBarProvider />
        {children}
      </body>
    </html>
  );
}
