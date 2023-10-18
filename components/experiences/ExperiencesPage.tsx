import Container from 'components/Container'
import IndexPageHead from 'components/home/IndexPageHead'
import Layout from 'components/Layout'
import { FlattenedExperience } from 'lib/models/flattened-experience'
import { Settings } from 'lib/sanity.queries'

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

    return <div className="grid gap-8 lg:grid-cols-2"></div>
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
          {JSON.stringify(experiences)}
        </Container>
      </Layout>
    </>
  )
}

function ExperienceSection({
  experience,
}: {
  experience: FlattenedExperience
}) {
  return <></>
}
