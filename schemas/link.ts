import { defineField } from 'sanity'

export const linkSchema = {
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare({ title, url }) {
      return {
        title: title ?? url,
      }
    },
  },
}

export interface Link {
  title: string
  url: string
}
