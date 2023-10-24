import { groq } from 'next-sanity'

export const projectFields = groq`
  _id,
  title,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  tags,
  links,
  category,
  startDate,
  endDate,
  authors[]->{name, picture, link},
  content,
  experiences[]->{place, role, startDate, endDate, coverImage, "slug": slug.current, links},
`

export const latestProjectsQuery = groq`*[_type == "project"] | order(startDate desc, _updatedAt desc) [0...4] {
    ${projectFields}
  }`

export const projectsQuery = groq`*[_type == "project"] | order(date desc, _updatedAt desc) {
    ${projectFields}
  }`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
  }`

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)][].slug.current
  `
