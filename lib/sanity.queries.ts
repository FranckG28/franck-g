import { groq } from 'next-sanity'
import { SectionSettings } from 'schemas/settings/section-settings'

import { SocialLink } from './models/social-link'

export const settingsQuery = groq`*[_type == "settings"][0]`

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
  }
  experiences?: SectionSettings
  projects?: SectionSettings
  footer?: string
  socialLinks?: SocialLink[]
}
