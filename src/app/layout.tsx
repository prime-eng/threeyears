
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiga Tahun, Masih Kamu",
  description:
    "Sebuah scrapbook kecil untuk tiga tahun perjalanan, kenangan, dan cerita kita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
