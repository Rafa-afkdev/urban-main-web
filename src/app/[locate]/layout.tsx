import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
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
  title: "Urban Contractors LLC",
  description: "Construye tus sueños con nuestro equipo de expertos.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locate: string }>;
}>) {
  const { locate } = await params;
  setRequestLocale(locate);
  const messages = await getMessages();

  return (
    <html lang={locate}>
      <head>
        {/* Preload hero video data */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://s.ytimg.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
