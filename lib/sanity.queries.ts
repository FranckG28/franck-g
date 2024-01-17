import { groq } from 'next-sanity'
import { Photo } from 'schemas/photo'
import { SectionSettings } from 'schemas/settings/section-settings'

import { SocialLink } from './models/social-link'

export const settingsQuery = groq`*[_type == "settings"][0] {
  ...,
  photoShowcase[]->{title, image, excerpt},
}`

export interface SanityEntityProps {
  _id?: string
  _type?: string
  _createdAt?: string
  _updatedAt?: string
}

export interface Settings {
  title?: string
  description?: any[]
  location?: string
  logo?: any
  ogImage?: {
    title?: string
    subtitle?: string
    siteName?: string
  }
  youtubeChannelId?: string
  experiences?: SectionSettings
  projects?: SectionSettings
  videos?: SectionSettings
  footer?: string
  socialLinks?: SocialLink[]
  photoShowcase?: Pick<Photo, 'title' | 'image'>[]
}
