import IndexPage from 'components/home/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import {
  getClient,
  getLatestExperiences,
  getLatestProjects,
  getSettings,
} from 'lib/sanity.client'
import { Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import { Experience } from 'schemas/experience'
import { Project } from 'schemas/project'

interface PageProps extends SharedPageProps {
  // posts: Post[]
  projects: Project[]
  experiences: Experience[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { projects, experiences, settings, draftMode } = props

  if (draftMode) {
    return (
      <PreviewIndexPage
        projects={projects}
        experiences={experiences}
        settings={settings}
      />
    )
  }

  return (
    <IndexPage
      projects={projects}
      experiences={experiences}
      settings={settings}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, projects, experiences] = await Promise.all([
    getSettings(client),
    getLatestProjects(client),
    getLatestExperiences(client),
  ])

  return {
    props: {
      projects,
      experiences,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
