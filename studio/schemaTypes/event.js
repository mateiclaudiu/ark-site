import { defineField, defineType } from "sanity"

const formatDate = iso => {
  if (!iso) return "Geen datum"
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d).toLocaleDateString("nl-BE", { weekday: "short", day: "numeric", month: "long", year: "numeric" })
}

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      description: "Bijvoorbeeld: Middagpauzegebed, Stadsgebed of Geen viering.",
      initialValue: "Middagpauzegebed",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Datum",
      type: "date",
      description: "Het event verdwijnt vanzelf van de website de dag na deze datum.",
      options: { dateFormat: "DD-MM-YYYY" },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "time",
      title: "Uur",
      type: "string",
      description: "Bijvoorbeeld: 12u15 – 12u45",
    }),
    defineField({
      name: "info",
      title: "Voorganger(s)",
      type: "string",
      description: "Bij 'Geen viering': de reden, bv. Paasvakantie.",
    }),
    defineField({
      name: "place",
      title: "Plaats",
      type: "string",
      description: "Bijvoorbeeld: Anglicaanse kerk, Grétrystraat 39, Antwerpen",
    }),
    defineField({
      name: "note",
      title: "Nadien",
      type: "string",
      description: "Optioneel, bv. gelegenheid tot napraten.",
    }),
  ],
  orderings: [
    { title: "Datum (nieuwste eerst)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
    { title: "Datum (oudste eerst)", name: "dateAsc", by: [{ field: "date", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", date: "date", time: "time", place: "place" },
    prepare: ({ title, date, time, place }) => ({
      title: `${formatDate(date)} – ${title || ""}`,
      subtitle: [time, place].filter(Boolean).join(" · "),
    }),
  },
})
