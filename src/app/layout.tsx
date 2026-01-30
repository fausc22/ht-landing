import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  title: {
    default: `${site.name} | Semillas y agroquímicos en Huinca Renanco, Córdoba`,
    template: `%s | ${site.name}`,
  },
  description:
    "Híbridos Don Mario, alfalfa AlphaTec y Magna, agroquímicos al mejor precio. Huinca Renanco, Córdoba.",
  openGraph: {
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
