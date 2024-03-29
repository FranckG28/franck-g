import { defineField } from 'sanity'

export interface SectionSettings {
  name: string
  previewTitle: string
  pageTitle: string
  pageDescription: any
  emptyMessage: string
  showMoreText: string
}

export const sectionSettingsFields = [
  defineField({
    name: 'name',
    description: 'The name of the entity.',
    type: 'string',
  }),
  defineField({
    name: 'previewTitle',
    description: 'The title of the section latest entities on homepage.',
    type: 'string',
  }),
  defineField({
    name: 'pageTitle',
    description:
      'The entity page title. It will be displayed in the entity list page',
    type: 'string',
  }),
  defineField({
    name: 'pageDescription',
    title: 'Page description',
    description:
      'A short description of the entity. It will be displayed in the entity list page',
    type: 'array',
    of: [
      { type: 'block' },
    ],
  }),
  defineField({
    name: 'emptyMessage',
    description: 'The message to display when there is no entity to display.',
    type: 'string',
  }),
  defineField({
    name: 'showMoreText',
    description: 'The show more button text of this entity.',
    type: 'string',
    initialValue: 'Show more',
  }),
]
