import { groq } from "next-sanity";

export const certificationsFields = groq`
    _id,
    title,
    _updatedAt,
    "slug": slug.current,
    date,
    links,
    content,
    `