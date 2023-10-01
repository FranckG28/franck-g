import ProjectPage from 'components/projects/ProjectPage'
import { readToken } from 'lib/sanity.api'
import {
  getAllProjectsSlugs,
  getClient,
  getProjectBySlug,
  getSettings,
} from 'lib/sanity.client'
import { Settings } from 'lib/sanity.queries'
import { SharedPageProps } from 'pages/_app'
import { Project } from 'schemas/project'

interface PageProps extends SharedPageProps {
  project: Project
  settings?: Settings
}

export default function ProjectSlugRoute(props: PageProps) {
  const { project, settings, draftMode } = props

  if (draftMode) {
    return (
      <p>TODO: To implement</p>
      //   <PreviewProjectPage project={project} settings={settings} />
    )
  }

  return <ProjectPage project={project} settings={settings} />
}

export const getStaticProps = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, project] = await Promise.all([
    getSettings(client),
    getProjectBySlug(client, params.slug),
  ])

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      settings,
      project,
      draftMode,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllProjectsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/projects/${slug}`) || [],
    fallback: 'blocking',
  }
}
