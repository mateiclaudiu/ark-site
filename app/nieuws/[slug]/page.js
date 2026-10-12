import Page from "../../../src/views/article"
import { seo } from "../../../lib/seo"
import { getArticle, getArticles } from "../../../lib/content"

// Statische export: één pagina per artikel uit Sanity.
export const dynamicParams = false

export async function generateStaticParams() {
  return (await getArticles()).map(article => ({ slug: article.slug }))
}

// Gewone JPG (geen WebP/AVIF: niet elk netwerk toont dat), bijgesneden rond het focuspunt uit Sanity.
const shareImage = ({ url, hotspot }) => {
  const fp = hotspot ? `&fp-x=${hotspot.x.toFixed(3)}&fp-y=${hotspot.y.toFixed(3)}` : ""
  return `${url}?w=1200&h=630&fit=crop&crop=focalpoint${fp}&fm=jpg&q=85`
}

export async function generateMetadata({ params }) {
  const article = await getArticle((await params).slug)
  return seo(article.title, article.lead, {
    type: "article",
    path: `/nieuws/${article.slug}/`,
    // 1200×630: het formaat dat Facebook, WhatsApp en LinkedIn tonen (bijgesneden rond het focuspunt).
    image: article.image ? shareImage(article.image) : undefined,
    imageAlt: article.image?.alt,
  })
}

export default async function Article({ params }) {
  return <Page article={await getArticle((await params).slug)}/>
}
