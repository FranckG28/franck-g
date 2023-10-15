import Container from 'components/Container'
import IndexPageHead from 'components/home/IndexPageHead'
import Layout from 'components/Layout'
import { Settings } from 'lib/sanity.queries'
import { Experience } from 'schemas/experience'

import ExperiencePreview from './ExperiencePreview'

export default function ExperiencesPage({
  experiences,
  settings,
}: {
  experiences: Experience[]
  settings: Settings
}) {
  const getContent = () => {
    if (!experiences || experiences?.length === 0) {
      return (
        <p>{settings.experiences.emptyMessage ?? 'No experiences found.'}</p>
      )
    }

    return (
      <div className="grid gap-8 lg:grid-cols-2">
        {experiences.map((exp, index) => (
          <ExperiencePreview key={index} experience={exp} />
        ))}
      </div>
    )
  }

  return (
    <>
      <IndexPageHead
        settings={settings}
        pageName={settings.experiences.title}
      />

      <Layout preview={false} loading={false} settings={settings}>
        <Container className="flex flex-col gap-4">
          <h1>{settings.experiences.title ?? 'Experiences'}</h1>
          <p className="text-zinc-400 max-w-prose">
            {settings.experiences.description ??
              'A collection of my experiences.'}
          </p>
          {getContent()}
        </Container>
      </Layout>
    </>
  )
}
