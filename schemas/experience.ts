import { ClockIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { SanityEntityProps } from 'lib/sanity.queries'
import { defineField, defineType } from 'sanity'

import { Link, linkSchema } from './link'

export default defineType({
  name: 'experience',
  title: 'Experiences',
  description: 'Describe here your work and studies experiences.',
  icon: ClockIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'place',
      title: 'Place',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (object) => `${object.place}-${object.role}`,
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        linkSchema
      ],
    }),
  ],
  preview: {
    select: {
      place: 'place',
      role: 'role',
      startDate: 'date',
      endDate: 'date',
      media: 'coverImage',
    },
    prepare({ place, media, role, startDate, endDate }) {
      const subtitles = [
        startDate && `from ${format(parseISO(startDate), 'LLL d, yyyy')}`,
        endDate && `to ${format(parseISO(endDate), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return {
        title: `${role} @ ${place}`,
        media,
        subtitle: subtitles.join(' ')
      }
    },
  },
})

export interface Experience extends SanityEntityProps {
  place?: string
  role?: string
  slug?: string
  content?: any
  coverImage?: any
  startDate?: string
  endDate?: string
  links: Link[]
}