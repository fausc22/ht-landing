import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Híbridos Don Mario, alfalfa AlphaTec y Magna, agroquímicos. Semillas y agroquímicos al mejor precio.",
};

export default function ProductosPage() {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Productos
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Semillas y agroquímicos para tu campaña. Contenido en desarrollo.
        </p>
        <ul className="mt-8 space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>
            <Link href="/productos#soja" className="underline hover:no-underline">
              Sojas Don Mario (Enlist)
            </Link>
          </li>
          <li>
            <Link href="/productos#alfalfa" className="underline hover:no-underline">
              Alfalfa (AlphaTec, Hybriforce, Magna)
            </Link>
          </li>
          <li>
            <Link href="/productos#agroquimicos" className="underline hover:no-underline">
              Agroquímicos
            </Link>
          </li>
        </ul>
        <p className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
          {site.name} — {site.location}
        </p>
      </Container>
    </div>
  );
}
