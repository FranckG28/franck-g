import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import { Project } from 'schemas/project'

export interface ProjectPageHeadProps {
  settings: Settings
  project: Project
}

export default function ProjectPageHead({
  settings,
  project,
}: ProjectPageHeadProps) {
  const title = settings.title ?? demo.title
  return (
    <>
      <Head>
        <title>{project.title ? `${project.title} | ${title}` : title}</title>
        <BlogMeta />
        {project.coverImage?.asset?._ref && (
          <meta
            property="og:image"
            content={urlForImage(project.coverImage)
              .width(1200)
              .height(627)
              .fit('crop')
              .url()}
          />
        )}
      </Head>
    </>
  )
}
