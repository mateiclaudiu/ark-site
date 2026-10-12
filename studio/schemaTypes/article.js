import { defineArrayMember, defineField, defineType } from "sanity"

const formatDate = iso => {
  if (!iso) return "Geen datum"
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })
}

export const article = defineType({
  name: "article",
  title: "Artikel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Webadres",
      type: "slug",
      description: "Het laatste deel van de link naar dit artikel. Klik op 'Genereren' om het uit de titel te maken.",
      options: { source: "title", maxLength: 80 },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Publicatiedatum",
      type: "date",
      description: "Bepaalt de volgorde: het nieuwste artikel staat bovenaan.",
      options: { dateFormat: "DD-MM-YYYY" },
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: rule => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
      description: "Optioneel, bv. Ilse Van Halst, redacteur Kerk & Leven.",
    }),
    defineField({
      name: "lead",
      title: "Korte inleiding",
      type: "text",
      rows: 3,
      description: "Eén of twee zinnen. Verschijnt vet bovenaan het artikel en in het overzicht.",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Afbeelding",
      type: "image",
      description: "Optioneel. Verschijnt bovenaan het artikel, in het overzicht en bij delen op sociale media. Met het focuspunt kies je wat zeker zichtbaar blijft als de afbeelding wordt bijgesneden.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Korte beschrijving",
          type: "string",
          description: "Wat staat er op de afbeelding? (voor blinden en zoekmachines)",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Tekst",
      type: "array",
      description: "Kies 'Tussenkop' voor een kopje en 'Citaat' voor een uitgelichte zin.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normaal", value: "normal" },
            { title: "Tussenkop", value: "h2" },
            { title: "Citaat", value: "blockquote" },
          ],
          lists: [
            { title: "Opsomming", value: "bullet" },
            { title: "Genummerd", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Vet", value: "strong" },
              { title: "Cursief", value: "em" },
            ],
            annotations: [
              defineArrayMember({
                name: "link",
                type: "object",
                title: "Link",
                fields: [defineField({ name: "href", title: "Webadres", type: "url", validation: rule => rule.uri({ scheme: ["http", "https", "mailto"] }) })],
              }),
            ],
          },
        }),
      ],
    }),
  ],
  orderings: [{ title: "Datum (nieuwste eerst)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: {
    select: { title: "title", date: "date", media: "image" },
    prepare: ({ title, date, media }) => ({ title, subtitle: formatDate(date), media }),
  },
})
