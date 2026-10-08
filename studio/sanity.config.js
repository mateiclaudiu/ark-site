import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { nlNLLocale } from "@sanity/locale-nl-nl"
import { projectId, dataset } from "./project"
import { schemaTypes } from "./schemaTypes"
import { structure } from "./structure"

const SINGLETONS = ["recurring"]

export default defineConfig({
  name: "ark",
  title: "ARK-website",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), nlNLLocale()],
  schema: {
    types: schemaTypes,
    // "Wederkerende events" bestaat precies één keer: niet opnieuw aanmaken.
    templates: templates => templates.filter(({ schemaType }) => !SINGLETONS.includes(schemaType)),
  },
  document: {
    actions: (actions, { schemaType }) =>
      SINGLETONS.includes(schemaType)
        ? actions.filter(({ action }) => !["unpublish", "delete", "duplicate"].includes(action))
        : actions,
  },
})
