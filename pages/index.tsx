import IndexPage from 'components/home/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { getLatestCertifications } from 'lib/certifications.client'
import { getLatestExperiences } from 'lib/experience.client'
import { getLatestProjects } from 'lib/project.client'
import { readToken } from 'lib/sanity.api'
import { getClient, getSettings } from 'lib/sanity.client'
import { Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import { Certification } from 'schemas/certification'
import { Experience } from 'schemas/experience'
import { Project } from 'schemas/project'

interface PageProps extends SharedPageProps {
  projects: Project[]
  experiences: Experience[]
  certifications: Certification[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { projects, experiences, certifications, settings, draftMode } = props

  if (draftMode) {
    return (
      <PreviewIndexPage
        projects={projects}
        experiences={experiences}
        settings={settings}
        certifications={certifications}
      />
    )
  }

  return (
    <IndexPage
      certifications={certifications}
      projects={projects}
      experiences={experiences}
      settings={settings}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, projects, experiences, certifications] = await Promise.all([
    getSettings(client),
    getLatestProjects(client),
    getLatestExperiences(client),
    getLatestCertifications(client),
  ])

  return {
    props: {
      projects,
      experiences,
      settings,
      certifications,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
