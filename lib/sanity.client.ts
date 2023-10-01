import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  indexQuery,
  latestExperiencesQuery,
  latestProjectsQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  projectsQuery,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'
import { Experience } from 'schemas/experience'
import { Project } from 'schemas/project'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {}
}

export async function getAllPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(indexQuery)) || []
}

export async function getLatestProjects(client: SanityClient): Promise<Project[]> {
  return (await client.fetch(latestProjectsQuery)) || []
}

export async function getAllProjects(client: SanityClient): Promise<Project[]> {
  return (await client.fetch(projectsQuery)) || []
}

export async function getLatestExperiences(client: SanityClient): Promise<Experience[]> {
  return (await client.fetch(latestExperiencesQuery)) || []
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

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getPostBySlug(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string,
): Promise<{ post: Post; morePosts: Post[] }> {
  return await client.fetch(postAndMoreStoriesQuery, { slug })
}
