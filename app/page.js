import Page from "../src/views/index"
import { seo } from "../lib/seo"
import { getArticles, getEvents, getRecurring } from "../lib/content"

export const metadata = seo("Home")

export default async function Home() {
  const [events, recurring, articles] = await Promise.all([getEvents(), getRecurring(), getArticles()])
  return <Page events={events} recurring={recurring} articles={articles.slice(0, 3)}/>
}
