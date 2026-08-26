import { site } from "@/lib/site";

const intentLabels = {
  buy: { es: "Compra de semillas o insumos", en: "Seed or crop-input purchase" },
  supply: { es: "Oferta de producción", en: "Production offer" },
  processing: { es: "Procesamiento o acondicionamiento", en: "Processing or conditioning" },
  alfalfa: { es: "Alfalfa y nutrición animal", en: "Alfalfa and animal nutrition" },
  international: { es: "Comercio internacional", en: "International trade" },
  institutional: { es: "Consulta institucional", en: "Institutional enquiry" },
  other: { es: "Otra consulta", en: "Other enquiry" },
} as const;

export type ContactEmailInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  intent: keyof typeof intentLabels;
  context: string;
  message: string;
  locale: "es" | "en";
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function digits(phone: string) {
  return phone.replace(/\D/g, "");
}

export function intentLabel(intent: ContactEmailInput["intent"], locale: "es" | "en" = "es") {
  return intentLabels[intent][locale];
}

export function buildContactEmail(data: ContactEmailInput) {
  const motive = intentLabel(data.intent, "es");
  const motiveLocal = intentLabel(data.intent, data.locale);
  const subject = `HT · ${motive} · ${data.name} · ${data.location}`;
  const phoneDigits = digits(data.phone);
  const whatsappUrl = phoneDigits ? `https://wa.me/${phoneDigits}` : null;
  const replyUrl = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent(`Re: ${subject}`)}`;

  const rows: Array<[string, string]> = [
    ["Motivo", motiveLocal],
    ["Nombre", data.name],
    ["Empresa", data.company || "—"],
    ["Email", data.email],
    ["Teléfono", data.phone || "—"],
    ["Ubicación", data.location],
    ["Idioma del formulario", data.locale === "es" ? "Español" : "English"],
    ["Contexto de página", data.context || "—"],
  ];

  const text = [
    "Nueva consulta web — HT Semillas",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Mensaje:",
    data.message,
    "",
    `Responder: ${data.email}`,
    whatsappUrl ? `WhatsApp: ${whatsappUrl}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const rowHtml = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #e6e2d6;color:#5d6a61;font-size:13px;width:34%;vertical-align:top;">${escapeHtml(label)}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e6e2d6;color:#17231b;font-size:14px;font-weight:600;vertical-align:top;">${escapeHtml(value)}</td>
      </tr>`,
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="es">
  <body style="margin:0;padding:0;background:#f4f1e7;font-family:Arial,Helvetica,sans-serif;color:#17231b;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f1e7;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#fffdf7;border:1px solid #d9d8cd;border-radius:18px;overflow:hidden;">
            <tr>
              <td style="background:#174c2c;padding:22px 24px;color:#ffffff;">
                <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.85;">HT Semillas S.A.</div>
                <div style="margin-top:8px;font-size:22px;font-weight:700;">Nueva consulta web</div>
                <div style="margin-top:12px;display:inline-block;background:#d2a954;color:#0d321d;border-radius:999px;padding:6px 12px;font-size:12px;font-weight:700;">${escapeHtml(motive)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 12px 0;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${rowHtml}</table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 24px 8px;">
                <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#5d6a61;font-weight:700;">Mensaje</div>
                <div style="margin-top:10px;padding:16px;border-radius:14px;background:#f4f1e7;border:1px solid #d9d8cd;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px 24px;">
                <a href="${replyUrl}" style="display:inline-block;margin:8px 8px 0 0;background:#174c2c;color:#ffffff;text-decoration:none;border-radius:999px;padding:12px 18px;font-size:13px;font-weight:700;">Responder al lead</a>
                ${
                  whatsappUrl
                    ? `<a href="${whatsappUrl}" style="display:inline-block;margin:8px 0 0;background:#ffffff;color:#174c2c;text-decoration:none;border:1px solid #174c2c;border-radius:999px;padding:12px 18px;font-size:13px;font-weight:700;">Abrir WhatsApp</a>`
                    : ""
                }
                <p style="margin:18px 0 0;font-size:12px;line-height:1.5;color:#5d6a61;">Enviado desde ${escapeHtml(site.url)} · Casilla operativa ${escapeHtml(site.email)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}
