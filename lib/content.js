// Haalt de inhoud op tijdens de build: uit Sanity als dat gekoppeld is, anders uit src/data.
// Na "Publish" in Sanity start een webhook een nieuwe build op Netlify.
import { sanity } from "./sanity"
import eventsJson from "../src/data/events.json"
import recurringJson from "../src/data/recurring.json"
import middagGretry from "../src/images/middagpauzegebed-gretrystraat-2026.jpg"
import stadsgebedRecto from "../src/images/stadsgebed-recto-2026.jpg"
import stadsgebedVerso from "../src/images/stadsgebed-verso-2026.jpg"
import middagBex from "../src/images/middagpauzegebed-bexstraat-2026.jpg"

const localImages = {
  "middagpauzegebed-gretrystraat-2026.jpg": middagGretry,
  "stadsgebed-recto-2026.jpg": stadsgebedRecto,
  "stadsgebed-verso-2026.jpg": stadsgebedVerso,
  "middagpauzegebed-bexstraat-2026.jpg": middagBex,
}

const DAY_NAMES = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]

// "2026-10-08" → "Donderdag" (als lokale datum, zodat de dag niet verschuift)
const dayNameOf = isoDate => {
  const [y, m, d] = isoDate.split("-").map(Number)
  return DAY_NAMES[new Date(y, m - 1, d).getDay()]
}

async function query(groq) {
  // Niet de CDN (apicdn): een build direct na "Publish" moet de nieuwste versie zien.
  // Statische export laat geen `cache: "no-store"` toe; het GROQ-commentaar met de buildtijd
  // maakt de URL per build uniek, zodat er nooit een verouderd antwoord uit een cache komt.
  const url = `https://${sanity.projectId}.api.sanity.io/v${sanity.apiVersion}/data/query/${sanity.dataset}` +
    `?query=${encodeURIComponent(`${groq} // build ${process.env.BUILD_DATE_ISO}`)}`
  const response = await fetch(url)
  // Bij een fout faalt de build bewust: Netlify houdt dan de vorige versie online.
  if (!response.ok) throw new Error(`Sanity-query mislukt (${response.status}): ${await response.text()}`)
  return (await response.json()).result
}

export async function getEvents() {
  if (!sanity.projectId) return eventsJson
  const events = await query(`*[_type == "event" && defined(date)] | order(date asc) {
    title, "eventDate": date, time, info, place, note
  }`)
  return events.map(event => ({ ...event, dayName: dayNameOf(event.eventDate) }))
}

const localRecurring = () => ({
  ...recurringJson,
  flyers: recurringJson.flyers.map(({ _key, file, width, height, alt }) => ({
    _key, src: localImages[file], ratio: width / height, alt,
  })),
})

export async function getRecurring() {
  if (!sanity.projectId) return localRecurring()
  const doc = await query(`*[_id == "recurring"][0] {
    intro, schedule, note,
    "flyers": flyers[] { _key, alt, "url": asset->url, "width": asset->metadata.dimensions.width,
                         "height": asset->metadata.dimensions.height }
  }`)
  if (!doc) return localRecurring()
  return {
    intro: doc.intro || [],
    schedule: doc.schedule || [],
    note: doc.note || "",
    flyers: (doc.flyers || []).filter(f => f.url).map(f => ({
      _key: f._key, src: `${f.url}?w=1200&auto=format`, ratio: f.width / f.height, alt: f.alt || "",
    })),
  }
}
