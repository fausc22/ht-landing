import { z } from "zod";

export const contactSchema = z.object({
  intent: z.enum(["buy", "supply", "processing", "alfalfa", "international", "institutional", "other"]),
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(50).optional().default(""),
  location: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(3000),
  locale: z.enum(["es", "en"]),
  website: z.string().max(0).optional().default(""),
});
