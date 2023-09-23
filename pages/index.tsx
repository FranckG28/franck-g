import IndexPage from 'components/index/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import {
  getAllPosts,
  getClient,
  getLatestProjects,
  getSettings,
} from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import { Project } from 'schemas/project'

interface PageProps extends SharedPageProps {
  // posts: Post[]
  projects: Project[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { projects, settings, draftMode } = props

  if (draftMode) {
    return <PreviewIndexPage projects={projects} settings={settings} />
  }

  return <IndexPage projects={projects} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, projects] = await Promise.all([
    getSettings(client),
    getLatestProjects(client),
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
