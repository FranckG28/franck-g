import { groq } from 'next-sanity'
import { Author } from 'schemas/author'
import { SectionSettings } from 'schemas/settings/section-settings'

import { SocialLink } from './models/social-link'

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture, link},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": * [_type == "post" && slug.current == $slug] | order(_updatedAt desc)[0] {
    content,
      ${postFields}
  },
  "morePosts": * [_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc)[0...2] {
    content,
      ${postFields}
  }
} `

export const postSlugsQuery = groq`
  * [_type == "post" && defined(slug.current)][].slug.current
    `

export const postBySlugQuery = groq`
  * [_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface SanityEntityProps {
  _id?: string
  _type?: string
  _createdAt?: string
  _updatedAt?: string
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  location?: string
  logo?: any
  ogImage?: {
    title?: string
  }
  experiences?: SectionSettings
  projects?: SectionSettings
  footer?: string
  socialLinks: SocialLink[]
}
