import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, PackageCheck, UsersRound } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "HT Semillas en Huinca Renanco, Córdoba. Insumos agropecuarios, semillas y comercialización de alfalfa junto a productores.",
};

const pillars = [
  {
    icon: MapPin,
    title: "Cercanía regional",
    text: `Base en ${site.location}, con foco en productores de ${site.region}.`,
  },
  {
    icon: PackageCheck,
    title: "Respuesta comercial",
    text: "Cotizaciones simples, disponibilidad clara y productos ordenados por campaña.",
  },
  {
    icon: UsersRound,
    title: "Red de productores y clientes",
    text: "Trabajo entre quienes producen alfalfa y quienes necesitan abastecimiento constante.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Nosotros
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              HT Semillas, una empresa agropecuaria con mirada comercial
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Nacimos para acompañar al productor desde lo práctico: conseguir
              insumos, elegir variedades y abrir canales de venta para la
              alfalfa. Nuestro trabajo combina conocimiento de campo, respuesta
              comercial y una red activa de clientes.
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Hablar con HT
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/campo-alfalfa.jpg"
              alt={`Campo de alfalfa vinculado a ${site.name}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-stone-50 py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <pillar.icon className="size-7 text-primary" />
                <h2 className="mt-5 font-semibold text-stone-900">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
              Cómo trabajamos
            </h2>
            <p className="mt-5 leading-7 text-stone-600">
              El productor necesita decisiones concretas, no discursos largos.
              Por eso el proceso de HT se apoya en información clara: ubicación,
              superficie, campaña, producto buscado, volumen estimado y fecha
              de necesidad o entrega.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Relevamos la necesidad: insumos, semillas o producción de alfalfa.",
              "Cotizamos o proponemos alternativas según disponibilidad y objetivo.",
              "Coordinamos condiciones comerciales, calidad esperada y logística.",
              "Mantenemos seguimiento para sostener relaciones de campaña a campaña.",
            ].map((item, index) => (
              <div
                key={item}
                className="grid gap-4 rounded-lg border border-stone-200 p-5 sm:grid-cols-[3rem_1fr]"
              >
                <span className="flex size-12 items-center justify-center rounded-md bg-primary text-lg font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <p className="self-center text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
