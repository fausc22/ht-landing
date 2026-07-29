import type { Metadata } from "next";
import { Analytics } from "@/components/analytics/Analytics";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "HT Semillas | Producción que trasciende fronteras",
    template: "HT Semillas | %s",
  },
  description: "Semillas, insumos, procesamiento, alfalfa y comercio internacional desde Huinca Renancó, Córdoba, Argentina.",
  applicationName: site.shortName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
