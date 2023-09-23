import { defineField } from "sanity";

export const linkSchema = {
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (rule) => rule.required(),
        }),
    ],
};

export interface Link {
    title: string;
    url: string;
}