import ExperiencePage from 'components/experiences/ProjectPage'
import {
  getAllExperiencesSlugs,
  getExperienceBySlug,
} from 'lib/experience.client'
import { readToken } from 'lib/sanity.api'
import { getClient, getSettings } from 'lib/sanity.client'
import { Settings } from 'lib/sanity.queries'
import { SharedPageProps } from 'pages/_app'
import { Experience } from 'schemas/experience'

interface PageProps extends SharedPageProps {
  experience: Experience
  settings?: Settings
}

export default function experienceSlugRoute(props: PageProps) {
  const { experience, settings, draftMode } = props

  // if (draftMode) {
  //   return <PreviewExperiencePage experience={experience} settings={settings} />
  // }

  return <ExperiencePage experience={experience} settings={settings} />
}

export const getStaticProps = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, experience] = await Promise.all([
    getSettings(client),
    getExperienceBySlug(client, params.slug),
  ])

  if (!experience) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      settings,
      experience,
      draftMode,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllExperiencesSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/experiences/${slug}`) || [],
    fallback: 'blocking',
  }
}
