// Zet de huidige inhoud uit ../src/data om naar een Sanity-importbestand (import/data.ndjson).
// Gebruik: npm run import   (vraagt eenmalig `npx sanity login`)
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const here = path.dirname(fileURLToPath(import.meta.url))
const site = path.resolve(here, "../..")
const events = JSON.parse(fs.readFileSync(path.join(site, "src/data/events.json"), "utf8"))
const recurring = JSON.parse(fs.readFileSync(path.join(site, "src/data/recurring.json"), "utf8"))

// Enkel de events vanaf de nieuwe activiteiten (september 2026); de oude woensdaggebeden zijn voorbij.
const FROM = "2026-09-01"
const slug = text => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

const docs = events
  .filter(e => e.eventDate >= FROM)
  .map(e => ({
    _id: `event-${e.eventDate}-${slug(e.title)}`,
    _type: "event",
    // "MIDDAGPAUZEGEBED" → "Middagpauzegebed"
    title: e.title.charAt(0) + e.title.slice(1).toLowerCase(),
    date: e.eventDate,
    time: e.time || undefined,
    info: e.info || undefined,
    place: e.place || undefined,
    note: e.note || undefined,
  }))

docs.push({
  _id: "recurring",
  _type: "recurring",
  intro: recurring.intro,
  schedule: recurring.schedule.map(row => ({ _type: "scheduleRow", ...row })),
  note: recurring.note,
  flyers: recurring.flyers.map(({ _key, file, alt }) => ({
    _type: "image",
    _key,
    _sanityAsset: `image@file://${path.join(site, "src/images", file)}`,
    alt,
  })),
})

fs.mkdirSync(path.join(here, "../import"), { recursive: true })
fs.writeFileSync(path.join(here, "../import/data.ndjson"), docs.map(d => JSON.stringify(d)).join("\n") + "\n")
console.log(`${docs.length - 1} events + wederkerende events → import/data.ndjson`)
