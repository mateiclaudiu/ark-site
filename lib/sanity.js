// Sanity-project voor de inhoud die de beheerder zelf aanpast (events, wederkerende events).
// Zolang projectId leeg is, gebruikt de site de JSON-bestanden in src/data.
// Het projectId is publiek (geen geheim); de dataset is publiek leesbaar.
export const sanity = {
  projectId: process.env.SANITY_PROJECT_ID || "3sj9g95c",
  dataset: "production",
  apiVersion: "2025-02-19",
}
