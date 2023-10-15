import { groq } from 'next-sanity'

const experienceFields = groq`
  _id,
  place,
  role,
  startDate,
  endDate,
  _updatedAt,
  coverImage,
  "slug": slug.current,
  links,
`

export const latestExperiencesQuery = groq`* [_type == "experience"] | order(date desc, _updatedAt desc)[0...4] {
    ${experienceFields}
  } `

export const experiencesQuery = groq`* [_type == "experience"] | order(date desc, _updatedAt desc) {
    ${experienceFields}
  } `

export const experienceBySlugQuery = groq`* [_type == "experience" && slug.current == $slug][0] {
    ${experienceFields}
  } `

export const experiencesSlugsQuery = groq`* [_type == "experience" && defined(slug.current)][].slug.current`
