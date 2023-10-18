import Container from 'components/Container'
import IndexPageHead from 'components/home/IndexPageHead'
import Layout from 'components/Layout'
import { FlattenedExperience } from 'lib/models/flattened-experience'
import { Settings } from 'lib/sanity.queries'

import ExperienceSection from './ExperienceSection'

export default function ExperiencesPage({
  experiences,
  settings,
}: {
  experiences: FlattenedExperience[]
  settings: Settings
}) {
  const getContent = () => {
    if (!experiences || experiences?.length === 0) {
      return (
        <p>{settings.experiences.emptyMessage ?? 'No experiences found.'}</p>
      )
    }

    return (
      <div className="flex flex-col gap-16 mt-8">
        {experiences.map((experience, index) => {
          return <ExperienceSection key={index} experience={experience} />
        })}
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
