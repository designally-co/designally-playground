import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Site description",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "email", title: "Contact email", type: "email" }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
