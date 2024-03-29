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
  const websiteTitle = settings.title ?? demo.title
  const displayedTitle = project.title
    ? `${project.title} | ${websiteTitle}`
    : websiteTitle
  return (
    <>
      <Head>
        <title>{displayedTitle}</title>
        <BlogMeta />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={displayedTitle} />
        <meta property="og:description" content={project.excerpt} />
        <meta key="description" name="description" content={project.excerpt} />
        {/* {project.coverImage?.asset?._ref ? (
          <meta
            property="og:image"
            content={urlForImage(project.coverImage)
              .width(1200)
              .height(627)
              .fit('crop')
              .url()}
          />
        ) : ( */}
        <meta
          property="og:image"
          content={`${
            process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
          }/api/og?${new URLSearchParams({
            title: project.title ?? websiteTitle,
            subtitle: settings.projects.name,
            siteName: settings.title,
          })}`}
        />
      </Head>
    </>
  )
}
