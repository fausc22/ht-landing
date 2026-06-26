import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Handshake,
  Leaf,
  Truck,
} from "lucide-react";
import { alfalfaSteps } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Producción de Alfalfa",
  description:
    "Por qué conviene cultivar alfalfa para vender heno a HT Semillas: demanda organizada, manejo agronómico, calidad comercial y logística.",
  keywords: [
    "alfalfa argentina",
    "producir alfalfa",
    "vender alfalfa",
    "heno de alfalfa",
    "megafardos",
    "Huinca Renanco",
  ],
};

const benefits = [
  {
    icon: Handshake,
    title: "Demanda antes de producir",
    text: "HT trabaja con compradores que necesitan volumen y continuidad. Eso reduce la incertidumbre comercial frente a producir primero y buscar mercado despues.",
  },
  {
    icon: BarChart3,
    title: "Ingreso diversificado",
    text: "La alfalfa permite sumar una rotación forrajera con cortes sucesivos y una salida comercial distinta a los granos tradicionales.",
  },
  {
    icon: Leaf,
    title: "Mejora del sistema",
    text: "Como leguminosa perenne, aporta cobertura, raices profundas y fijación biologica de nitrogeno, ayudando a ordenar ambientes aptos.",
  },
  {
    icon: Truck,
    title: "Negocio logístico",
    text: "El valor no esta solo en sembrar: calidad, uniformidad, enfardado y entrega ordenada hacen que el heno sea comercialmente atractivo.",
  },
];

const qualityPoints = [
  "Lote limpio y stand uniforme desde la implantación.",
  "Corte oportuno para balancear kilos, hoja y calidad.",
  "Oreo y confección cuidada para evitar perdidas de hoja.",
  "Fardos o megafardos parejos, identificables y bien conservados.",
  "Planificación de volumen y fechas para coordinar compradores.",
];

export default function ProduccionAlfalfaPage() {
  return (
    <>
      <section className="bg-stone-950 text-white">
        <Container className="grid gap-10 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-light">
              Negocio alfalfa
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Cultivar alfalfa con una salida comercial clara
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              Para un productor agropecuario, la alfalfa puede ser mucho mas
              que una pastura. Con buen manejo se transforma en heno vendible,
              con cortes sucesivos y clientes que buscan calidad forrajera.
              HT conecta ese potencial productivo con demanda concreta.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Proponer hectareas
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/productos-servicios#alfalfa"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/50 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ver variedades
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/alfalfa-megafardos.png"
              alt="Megafardos de alfalfa preparados para carga y comercialización"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-200 bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Por qué le conviene al productor
            </h2>
            <p className="mt-4 text-stone-600">
              La ventaja no es prometer rindes: es organizar un cultivo que ya
              tiene uso ganadero, demanda y logística comercial posible cuando
              se produce con calidad.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6"
              >
                <benefit.icon className="size-7 text-primary" />
                <h3 className="mt-5 font-semibold text-stone-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Manejo recomendado
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
              Del lote al fardo: los puntos que definen el negocio
            </h2>
            <p className="mt-5 leading-7 text-stone-600">
              En Argentina, la alfalfa se maneja como cultivo perenne de alta
              respuesta a implantación, fertilidad y frecuencia de corte. Para
              vender heno, el foco debe estar en hoja, uniformidad, sanidad,
              humedad de confección y continuidad de oferta.
            </p>
          </div>
          <div className="grid gap-4">
            {alfalfaSteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-4 rounded-lg border border-stone-200 bg-white p-5 sm:grid-cols-[3rem_1fr]"
              >
                <span className="flex size-12 items-center justify-center rounded-md bg-primary text-lg font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/alfalfa-detalle.jpg"
              alt="Detalle de alfalfa verde para producción forrajera"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
              Qué necesita HT para comprar mejor
            </h2>
            <p className="mt-5 leading-7 text-stone-600">
              HT busca productores que quieran trabajar volumen con criterio
              comercial. Cuanto mas ordenada sea la producción, mas facil es
              presentar el heno ante clientes que ya compran por calidad,
              continuidad y cumplimiento.
            </p>
            <ul className="mt-8 grid gap-3">
              {qualityPoints.map((point) => (
                <li key={point} className="flex gap-3 text-stone-700">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Coordinar una propuesta
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
