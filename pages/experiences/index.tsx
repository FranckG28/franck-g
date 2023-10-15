import ExperiencesPage from 'components/experiences/ExperiencesPage'
import { getAllExperiences } from 'lib/experience.client'
import { readToken } from 'lib/sanity.api'
import { getClient, getSettings } from 'lib/sanity.client'
import { Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { SharedPageProps } from 'pages/_app'
import { Experience } from 'schemas/experience'

interface PageProps extends SharedPageProps {
  experiences: Experience[]
  settings: Settings
}

export default function Page(props: PageProps) {
  const { experiences, settings } = props

  return <ExperiencesPage experiences={experiences} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [experiences, settings] = await Promise.all([
    getAllExperiences(client),
    getSettings(client),
  ])

  return {
    props: {
      experiences,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
