import { CogIcon } from '@sanity/icons'
import * as demo from 'lib/demo.data'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { preview } from 'sanity-plugin-icon-picker'
import { iconPickerOptions } from 'schemas/iconPicker'

import OpenGraphInput from './OpenGraphInput'
import { sectionSettingsFields } from './section-settings'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: { select: { title: 'title', subtitle: 'description' } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: demo.location,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      description:
        'Used both for the <meta> description tag for SEO, and the blog subheader.',
      title: 'Description',
      type: 'array',
      initialValue: demo.description,
      of: [
        defineArrayMember({
          type: 'block',
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'string',
                    name: 'href',
                    title: 'URL',
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => [
                Rule.required(),
                Rule.uri({
                  allowRelative: true,
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
              ],
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'iconPicker',
              options: iconPickerOptions,
            }),
          ],
          preview: {
            select: {
              provider: 'icon.provider',
              name: 'icon.name',
              title: 'name',
              subtitle: 'url',
            },
            prepare({ provider, name, title, subtitle }) {
              return {
                title,
                subtitle,
                media: preview({ provider, name, options: {} }),
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'photoShowcase',
      title: 'Photo showcase',
      description:
        'Photos that are showcased on your home page. You can select up to 6 photos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'photo' }],
        }),
      ],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      description:
        'Used for social media previews when linking to pages that does not have a cover image.',
      type: 'object',
      components: {
        input: OpenGraphInput as any,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: demo.ogImageTitle,
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: demo.ogImageTitle,
        }),
        defineField({
          name: 'siteName',
          title: 'Site title',
          type: 'string',
          initialValue: demo.title,
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer text',
      description:
        'Text displayed at the right of the navigation in the footer of your blog.',
      type: 'string',
      initialValue: demo.footer,
    }),
    defineField({
      name: 'projects',
      title: 'Projects settings',
      type: 'object',
      fields: sectionSettingsFields,
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences settings',
      type: 'object',
      fields: sectionSettingsFields,
    }),
  ],
})
