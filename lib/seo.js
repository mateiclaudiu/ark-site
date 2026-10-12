import groepsfoto from "../src/images/ark-groepsfoto.jpg"

// Titel, beschrijving en deelgegevens (Facebook, WhatsApp, LinkedIn, X) per pagina.
// Afbeeldings-URL's worden absoluut via metadataBase in app/layout.js.
const site = { title: "ARK", name: "Antwerpse Raad van Kerken", description: "Antwerpse Raad van Kerken", author: "@Claudiu Matei" }

export function seo(title, description = "", { image, imageAlt, type = "website", path } = {}) {
  const metaDescription = description || site.description
  const images = [{ url: image || groepsfoto, alt: imageAlt || site.name }]
  return {
    title: `${title} | ${site.title}`,
    description: metaDescription,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title, description: metaDescription, type, siteName: site.name, locale: "nl_BE", images,
      ...(path ? { url: path } : {}),
    },
    twitter: { card: "summary_large_image", creator: site.author, title, description: metaDescription, images },
  }
}
