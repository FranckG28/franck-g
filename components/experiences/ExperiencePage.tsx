import Container from 'components/Container'
import Layout from 'components/Layout'
import useDateRangeString from 'lib/hooks/useDateRangeString'
import { Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import { Experience } from 'schemas/experience'

export interface ExperiencePageProps {
  preview?: boolean
  loading?: boolean
  experience: Experience
  settings: Settings
}

export default function ExperiencePage(props: ExperiencePageProps) {
  const { experience, settings, preview, loading } = props

  const dateRangeString = useDateRangeString(
    experience?.startDate,
    experience?.endDate,
    true,
  )

  if (!experience?.slug) {
    notFound()
  }

  return (
    <>
      {/* <ProjectPageHead project={project} settings={settings} /> */}

      <Layout preview={preview} loading={loading} settings={settings}>
        <Container>
          {preview && !experience ? (
            <p>Loading…</p>
          ) : (
            <>
              <article className="flex gap-6 max-xl:flex-col xl:items-start">
                {experience.slug}
              </article>
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}
