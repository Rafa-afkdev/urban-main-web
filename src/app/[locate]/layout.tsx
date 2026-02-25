import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";
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
  metadataBase: new URL("https://urbcontractors.com"),
  applicationName: "Urban Contractors",
  authors: [{ name: "Urban Contractors", url: "https://urbcontractors.com" }],
  creator: "Urban Contractors",
  publisher: "Urban Contractors",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        {/* Preconnect to Unsplash CDN for hero images on about/contact pages */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        {/* Preload critical hero image for the Services page */}
        <link
          rel="preload"
          as="image"
          href="/INICIO-Excelencia-servicios-remodelacion-scaled.jpg"
          type="image/jpeg"
        />
        <meta name="theme-color" content="#f29c38" />
        <LocalBusinessSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

