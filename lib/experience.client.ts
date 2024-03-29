import { SanityClient } from 'sanity'
import { Experience } from 'schemas/experience'

import {
  flattenedExperiencesQuery,
  latestExperiencesQuery,
} from './experience.queries'
import { FlattenedExperience } from './models/flattened-experience'

export async function getLatestExperiences(
  client: SanityClient,
): Promise<Experience[]> {
  return (await client.fetch(latestExperiencesQuery)) || []
}

export async function getFlattenedExperiences(
  client: SanityClient,
): Promise<FlattenedExperience[]> {
  return (await client.fetch(flattenedExperiencesQuery)) || []
}
