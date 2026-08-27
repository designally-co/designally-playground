import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Projects")
        .child(S.documentTypeList("project").title("Projects")),
      S.listItem()
        .title("Blog posts")
        .child(S.documentTypeList("blogPost").title("Blog posts")),
      S.divider(),
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
    ]);
