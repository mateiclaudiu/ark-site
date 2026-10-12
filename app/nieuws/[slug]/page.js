import Page from "../../../src/views/article"
import { seo } from "../../../lib/seo"
import { getArticle, getArticles } from "../../../lib/content"

// Statische export: één pagina per artikel uit Sanity.
export const dynamicParams = false

export async function generateStaticParams() {
  return (await getArticles()).map(article => ({ slug: article.slug }))
}

export async function generateMetadata({ params }) {
  const article = await getArticle((await params).slug)
  return seo(article.title, article.lead)
}

export default async function Article({ params }) {
  return <Page article={await getArticle((await params).slug)}/>
}
