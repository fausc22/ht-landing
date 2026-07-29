import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/productos", destination: "/es/soluciones", permanent: true },
      { source: "/productos-servicios", destination: "/es/soluciones", permanent: true },
      { source: "/produccion-alfalfa", destination: "/es/alfalfa-nutricion-animal", permanent: true },
      { source: "/nosotros", destination: "/es/empresa", permanent: true },
      { source: "/contacto", destination: "/es/contacto", permanent: true },
      { source: "/es/novedades", destination: "/es", permanent: true },
      { source: "/es/novedades/:slug*", destination: "/es", permanent: true },
      { source: "/en/news", destination: "/en", permanent: true },
      { source: "/en/news/:slug*", destination: "/en", permanent: true },
    ];
  },
};
export default nextConfig;
