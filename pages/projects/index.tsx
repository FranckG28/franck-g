import ProjectPage from 'components/projects/ProjectPage'
import { readToken } from 'lib/sanity.api'
import { getAllProjects, getClient } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import { SharedPageProps } from 'pages/_app'
import { Project } from 'schemas/project'

interface PageProps extends SharedPageProps {
  projects: Project[]
}

export default function Page(props: PageProps) {
  const { projects } = props

  return <ProjectPage projects={projects} />
}

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const projects = await getAllProjects(client)

  return {
    props: {
      projects,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
