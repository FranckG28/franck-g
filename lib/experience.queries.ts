import { groq } from 'next-sanity'

import { certificationsFields } from './certifications.queries'
import { projectFields } from './project.queries'

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
  content,
`

export const latestExperiencesQuery = groq`* [_type == "experience"] | order(date desc, _updatedAt desc)[0...4] {
    ${experienceFields}
  } `

export const experienceBySlugQuery = groq`* [_type == "experience" && slug.current == $slug][0] {
    ${experienceFields}
  } `

export const flattenedExperiencesQuery = groq`* [_type == "experience"] | order(startDate desc) {
    ${experienceFields}
    "projects": * [_type == "project" && references(^._id)] | order(startDate desc, _updatedAt desc) {
      ${projectFields}
    },
    "certifications": * [_type == "certification" && references(^._id)] | order(date desc, _updatedAt desc) {
      ${certificationsFields}
    }
  } `
