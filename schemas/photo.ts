import { ImagesIcon } from '@sanity/icons'
import { SanityEntityProps } from 'lib/sanity.queries'
import { defineField, defineType } from 'sanity'


export default defineType({
    name: 'photo',
    title: 'Photos',
    description: 'Showcase your photos.',
    icon: ImagesIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
            validation: (rule) => rule.required(),
            initialValue: () => new Date().toISOString().split('T')[0],
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'excerpt',
            media: 'image',
        },
    },
})

export interface Photo extends SanityEntityProps {
    title: string
    excerpt?: string
    slug: string
    image: any
}