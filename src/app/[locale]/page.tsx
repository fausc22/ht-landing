import { notFound } from "next/navigation";
import { Home } from "@/components/sections/Home";
import { createMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; return isLocale(locale) ? createMetadata(locale, "home") : {}; }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <Home locale={locale}/>; }
