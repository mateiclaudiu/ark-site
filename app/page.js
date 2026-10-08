import Page from "../src/views/index"
import { seo } from "../lib/seo"
import { getEvents, getRecurring } from "../lib/content"

export const metadata = seo("Home")

export default async function Home() {
  const [events, recurring] = await Promise.all([getEvents(), getRecurring()])
  return <Page events={events} recurring={recurring}/>
}
