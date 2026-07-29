import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: "Soluciones agroindustriales desde Huinca Renancó, Córdoba, Argentina.",
    start_url: "/es",
    display: "standalone",
    background_color: "#f4f1e7",
    theme_color: "#174c2c",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
