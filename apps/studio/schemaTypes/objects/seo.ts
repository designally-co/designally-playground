import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "title",
      title: "Search title",
      type: "string",
      validation: (rule) =>
        rule.max(60).warning("Keep this under 60 characters."),
    }),
    defineField({
      name: "description",
      title: "Search description",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning("Keep this under 160 characters."),
    }),
    defineField({
      name: "image",
      title: "Social sharing image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
