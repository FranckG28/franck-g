import { groq } from 'next-sanity'

export const certificationsFields = groq`
    _id,
    title,
    _updatedAt,
    "slug": slug.current,
    date,
    links,
    content,
    coverImage,
    "place": experience->place,
    `

export const latestCertificationsQuery = groq`
    *[_type == "certification"] | order(date desc)[0..4]{
        ${certificationsFields}
    }
`
