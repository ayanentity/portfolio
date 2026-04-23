import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayanentity | アヤネのアイデンティティ",
  description: "なかざと あやねのポートフォリオサイトです",
  icons: {
    icon: "/@app/favicon.ico",
  },
  openGraph: {
    title: "Ayanentity | アヤネのアイデンティティ",
    description: "なかざと あやねのポートフォリオサイトです",
    url: "https://ayanentity.com",
    siteName: "Ayanentity",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://ayanentity.com/ogp.png",
        width: 1200,
        height: 630,
        alt: "Ayane's identity Ayanentity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayanentity | アヤネのアイデンティティ",
    description: "なかざと あやねのポートフォリオサイトです",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
