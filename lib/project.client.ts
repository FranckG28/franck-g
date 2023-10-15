import { SanityClient } from "sanity"
import { Project } from "schemas/project"

import { latestProjectsQuery, projectBySlugQuery, projectSlugsQuery, projectsQuery } from "./project.queries"
import { getClient } from "./sanity.client"

export async function getLatestProjects(client: SanityClient): Promise<Project[]> {
    return (await client.fetch(latestProjectsQuery)) || []
}

export async function getAllProjects(client: SanityClient): Promise<Project[]> {
    return (await client.fetch(projectsQuery)) || []
}

export async function getProjectBySlug(
    client: SanityClient,
    slug: string,
): Promise<Project> {
    return (await client.fetch(projectBySlugQuery, { slug })) || ({} as any)
}

export async function getAllProjectsSlugs(): Promise<Pick<Project, 'slug'>[]> {
    const client = getClient()
    const slugs = (await client.fetch<string[]>(projectSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
}