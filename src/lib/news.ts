import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import type { Locale } from "@/lib/site";

const schema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
  category: z.string(),
  image: z.string().optional(),
  published: z.boolean().default(false),
  /** Slug of the equivalent article in the other locale */
  alternateSlug: z.string().optional(),
});
const base = path.join(process.cwd(), "src", "content", "news");
export type NewsItem = z.infer<typeof schema> & { slug: string; locale: Locale; body: string };

export function resolveNewsAlternateSlug(locale: Locale, slug: string): string | null {
  const article = getArticle(locale, slug);
  return article?.alternateSlug ?? null;
}

export function getNews(locale: Locale): NewsItem[] {
  const directory = path.join(base, locale);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter(name => name.endsWith(".mdx")).flatMap(name => {
    const raw = fs.readFileSync(path.join(directory, name), "utf8");
    const parsed = matter(raw); const data = schema.safeParse(parsed.data);
    if (!data.success || !data.data.published) return [];
    return [{ ...data.data, slug: name.replace(/\.mdx$/, ""), locale, body: parsed.content }];
  }).sort((a,b) => b.date.localeCompare(a.date));
}
export function getArticle(locale: Locale, slug: string) { return getNews(locale).find(item => item.slug === slug); }
