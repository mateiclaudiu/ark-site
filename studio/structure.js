// Menu links in de beheeromgeving.
export const structure = S =>
  S.list()
    .title("Inhoud")
    .items([
      S.listItem()
        .title("Events (Geplande events)")
        .schemaType("event")
        .child(
          S.documentTypeList("event")
            .title("Events")
            .defaultOrdering([{ field: "date", direction: "desc" }])
        ),
      S.listItem()
        .title("Wederkerende events")
        .id("recurring")
        .child(S.document().schemaType("recurring").documentId("recurring").title("Wederkerende events")),
    ])
