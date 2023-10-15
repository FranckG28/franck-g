import { SanityClient } from "sanity"
import { Experience } from "schemas/experience"

import { experienceBySlugQuery, experiencesQuery, experiencesSlugsQuery, latestExperiencesQuery } from "./experience.queries"
import { getClient } from "./sanity.client"

export async function getAllExperiences(client: SanityClient): Promise<Experience[]> {
    return (await client.fetch(experiencesQuery)) || []
}

export async function getLatestExperiences(client: SanityClient): Promise<Experience[]> {
    return (await client.fetch(latestExperiencesQuery)) || []
}

export async function getExperienceBySlug(
    client: SanityClient,
    slug: string,
): Promise<Experience> {
    return (await client.fetch(experienceBySlugQuery, { slug })) || ({} as any)
}

export async function getAllExperiencesSlugs(): Promise<Pick<Experience, 'slug'>[]> {
    const client = getClient()
    const slugs = (await client.fetch<string[]>(experiencesSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
}
