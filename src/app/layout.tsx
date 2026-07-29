import type { Metadata } from "next";
import { Analytics } from "@/components/analytics/Analytics";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.shortName, template: `%s | ${site.shortName}` },
  description: "Soluciones agroindustriales desde Huinca Renancó, Córdoba, Argentina.",
  applicationName: site.shortName,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "any" }],
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
