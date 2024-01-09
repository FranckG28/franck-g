import IndexPageHead from 'components/home/IndexPageHead'
import Container from 'components/layout/Container'
import Layout from 'components/layout/Layout'
import PageHeader from 'components/shared/PageHeader'
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
      <div className="relative">
        <div className="absolute top-0 md:left-[263px] h-8 w-px bg-gradient-to-b from-transparent to-zinc-700 z-0"></div>
        <div className="absolute top-8 bottom-8 md:left-[263px] w-px bg-zinc-700 z-0"></div>
        <div className="absolute md:left-[263px] bottom-0 h-8 w-px bg-gradient-to-t from-transparent to-zinc-700 z-0"></div>

        <div className="flex flex-col gap-20 mt-8 z-10 relative">
          {experiences.map((experience, index) => {
            return <ExperienceSection key={index} experience={experience} />
          })}
        </div>
      </div>
    )
  }

  return (
    <>
      <IndexPageHead
        settings={settings}
        pageName={settings.experiences.name ?? 'Experiences'}
      />

      <Layout preview={false} loading={false} settings={settings}>
        <Container className="flex flex-col gap-8 animate-fade-up">
          {/* <div className="flex flex-col gap-6">
            <h1>{settings.experiences.pageTitle ?? 'Experiences'}</h1>
            <p className="text-zinc-400 max-w-prose text-lg">
              {settings.experiences.pageDescription ??
                'A collection of my experiences.'}
            </p>
          </div> */}
          <PageHeader
            sectionSettings={settings.experiences}
            defaultName="Experiences"
            defaultDescription="A collection of my experiences."
          />
          {getContent()}
        </Container>
      </Layout>
    </>
  )
}
