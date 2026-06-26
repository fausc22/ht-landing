import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Package, Sprout, Tractor } from "lucide-react";
import { productGroups } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Productos y Servicios",
  description:
    "Semillas de alfalfa, híbridos Don Mario, agroquímicos y comercialización de alfalfa para productores agropecuarios.",
  keywords: [
    "semillas de alfalfa",
    "Don Mario",
    "agroquímicos",
    "HT Semillas",
    "Huinca Renanco",
  ],
};

const serviceCards = [
  {
    icon: Sprout,
    title: "Selección de variedades",
    text: "Ayuda para elegir materiales de alfalfa según objetivo: corte, pastoreo, frecuencia de uso y ambiente.",
  },
  {
    icon: Package,
    title: "Cotización de insumos",
    text: "Respuesta por disponibilidad y precio de semillas, herbicidas e insecticidas para la campaña.",
  },
  {
    icon: Tractor,
    title: "Comercialización de heno",
    text: "Acompañamiento para productores que quieren orientar superficie a alfalfa con comprador previsto.",
  },
];

export default function ProductosServiciosPage() {
  return (
    <>
      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Productos y servicios
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              Insumos, semillas y red comercial para el productor
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              HT Semillas concentra una oferta concreta para planificar campaña:
              variedades de alfalfa, semillas Don Mario, agroquímicos y una
              línea de trabajo para producir alfalfa con destino comercial.
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Solicitar cotización
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-stone-200 bg-stone-50 p-5"
              >
                <service.icon className="size-6 text-primary" />
                <h2 className="mt-4 font-semibold text-stone-900">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-stone-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
              Líneas disponibles
            </h2>
            <p className="mt-4 text-stone-600">
              Estas categorías salen de las publicaciones comerciales actuales
              de HT y quedan organizadas para consulta web.
            </p>
          </div>
          <div className="mt-12 grid gap-8">
            {productGroups.map((group) => (
              <article
                key={group.id}
                id={group.id}
                className="scroll-mt-24 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-72 bg-stone-200">
                    <Image
                      src={group.image}
                      alt={group.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-semibold text-stone-900">
                      {group.title}
                    </h3>
                    <p className="mt-3 leading-7 text-stone-600">
                      {group.summary}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span className="text-stone-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contacto?producto=${group.id}`}
                      className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-primary px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Consultar esta línea
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
              Servicio de compra y venta de alfalfa
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-stone-600">
              Además de vender semillas e insumos, HT desarrolla una red para
              comprar producción de alfalfa y abastecer clientes que necesitan
              heno. Para el productor, esto convierte la decisión de sembrar en
              un proyecto comercial con destino definido.
            </p>
          </div>
          <Link
            href="/produccion-alfalfa"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Conocer el negocio de alfalfa
            <ArrowRight className="size-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
