import Page from "../../src/views/news"
import { seo } from "../../lib/seo"
import { getArticles } from "../../lib/content"

export const metadata = seo("Nieuws")

export default async function News() {
  return <Page articles={await getArticles()}/>
}
