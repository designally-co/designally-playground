import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "overview", title: "Overview", default: true },
    { name: "story", title: "Case study" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Project name",
      type: "string",
      group: "overview",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "overview",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      group: "overview",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      group: "overview",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      group: "overview",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Feature on homepage",
      type: "boolean",
      group: "overview",
      initialValue: false,
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
      group: "story",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "array",
      group: "story",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "approach",
      title: "Approach",
      type: "array",
      group: "story",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "array",
      group: "story",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Project gallery",
      type: "array",
      group: "media",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alternative text",
              type: "string",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
  preview: {
    select: { title: "title", subtitle: "client", media: "coverImage" },
  },
});
