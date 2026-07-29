import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image: string;
  imageAlt: string;
  icon?: LucideIcon;
};

export function ContactCTA({
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  image,
  imageAlt,
  icon: Icon,
}: Props) {
  return (
    <section className="section-pad bg-gold">
      <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          {Icon ? <Icon className="size-9 text-forest" /> : null}
          <h2 className={`section-title max-w-3xl ${Icon ? "mt-6" : ""}`}>{title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="button-primary">
              {primaryLabel}
              <ArrowRight className="size-4" />
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="button-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </Reveal>
        <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </MaskReveal>
      </div>
    </section>
  );
}
