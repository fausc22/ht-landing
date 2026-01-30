import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Conocé ${site.name}. Ubicados en ${site.location}. Semillas y agroquímicos al mejor precio.`,
};

export default function NosotrosPage() {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Nosotros
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {site.name} está en {site.location}. Trabajamos con híbridos Don Mario,
          variedades de alfalfa y agroquímicos al mejor precio del mercado.
        </p>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Contenido en desarrollo: historia, equipo, ubicación.
        </p>
        <div className="mt-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 aspect-video flex items-center justify-center text-zinc-500 dark:text-zinc-400 text-sm">
          [ Imagen o mapa: {site.location} ]
        </div>
      </Container>
    </div>
  );
}
