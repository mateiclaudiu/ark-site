import { defineCliConfig } from "sanity/cli"
import { projectId, dataset } from "./project"

export default defineCliConfig({
  api: { projectId, dataset },
  // Beheeromgeving online op https://ark-website.sanity.studio
  studioHost: "ark-website",
})
