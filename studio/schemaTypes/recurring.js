import { defineArrayMember, defineField, defineType } from "sanity"

export const recurring = defineType({
  name: "recurring",
  title: "Wederkerende events",
  type: "document",
  fields: [
    defineField({
      name: "intro",
      title: "Introtekst",
      type: "array",
      description: "Selecteer tekst en klik op B om iets vet te zetten.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normaal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              { title: "Vet", value: "strong" },
              { title: "Cursief", value: "em" },
            ],
            annotations: [],
          },
        }),
      ],
    }),
    defineField({
      name: "schedule",
      title: "Schema",
      type: "array",
      description: "Eén regel per activiteit, in de volgorde van de maand.",
      of: [
        defineArrayMember({
          type: "object",
          name: "scheduleRow",
          title: "Activiteit",
          fields: [
            defineField({ name: "day", title: "Dag", type: "string", description: "Bijvoorbeeld: 2e donderdag (de site zet er 'Iedere' voor)", validation: rule => rule.required() }),
            defineField({ name: "time", title: "Uur", type: "string", description: "Bijvoorbeeld: 12u15 – 12u45" }),
            defineField({ name: "activity", title: "Activiteit", type: "string", description: "Bijvoorbeeld: Middagpauzegebed", validation: rule => rule.required() }),
            defineField({ name: "place", title: "Plaats", type: "string", description: "Bijvoorbeeld: Anglicaanse kerk, Grétrystraat 39" }),
          ],
          preview: {
            select: { day: "day", time: "time", activity: "activity" },
            prepare: ({ day, time, activity }) => ({ title: `${activity || ""} – iedere ${day || ""}`, subtitle: time }),
          },
        }),
      ],
    }),
    defineField({
      name: "note",
      title: "Opmerking",
      type: "text",
      rows: 2,
      description: "Verschijnt cursief onder het schema. Mag leeg blijven.",
    }),
    defineField({
      name: "flyers",
      title: "Flyers",
      type: "array",
      description: "Sleep afbeeldingen hierheen. Ze verschijnen naast elkaar in deze volgorde (verslepen om te ordenen).",
      options: { layout: "grid" },
      of: [
        defineArrayMember({
          type: "image",
          fields: [
            defineField({
              name: "alt",
              title: "Korte beschrijving",
              type: "string",
              description: "Wat staat er op de flyer? (voor blinden en zoekmachines)",
              validation: rule => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Wederkerende events" }) },
})
