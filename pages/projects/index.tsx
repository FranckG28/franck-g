import ProjectsPage from 'components/projects/ProjectsPage'
import { readToken } from 'lib/sanity.api'
import { getAllProjects, getClient, getSettings } from 'lib/sanity.client'
import { Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { SharedPageProps } from 'pages/_app'
import { Project } from 'schemas/project'

interface PageProps extends SharedPageProps {
  projects: Project[]
  settings: Settings
}

export default function Page(props: PageProps) {
  const { projects, settings } = props

  return <ProjectsPage projects={projects} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [projects, settings] = await Promise.all([
    getAllProjects(client),
    getSettings(client),
  ])

  return {
    props: {
      projects,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
