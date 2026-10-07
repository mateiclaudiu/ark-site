// Vervangt src/components/seo.js (react-helmet): dezelfde tags en titeltemplate.
const site = { title: "ARK", description: "Antwerpse Raad van Kerken", author: "@Claudiu Matei" }

export function seo(title, description = "") {
  const metaDescription = description || site.description
  return {
    title: `${title} | ${site.title}`,
    description: metaDescription,
    openGraph: { title, description: metaDescription, type: "website" },
    twitter: { card: "summary", creator: site.author, title, description: metaDescription },
  }
}
