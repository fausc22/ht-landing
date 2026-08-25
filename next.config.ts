import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
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
