import CertificationsPreviewSection from 'components/certifications/CertificationsPreviewSection'
import ExperiencePreviewsSection from 'components/experiences/ExperiencePreviewsSection'
import IndexHeader from 'components/home/IndexHeader'
import Container from 'components/layout/Container'
import Layout from 'components/layout/Layout'
import type { Settings } from 'lib/sanity.queries'
import { Certification } from 'schemas/certification'
import { Experience } from 'schemas/experience'
import { Project } from 'schemas/project'

import ProjectPreviewsSection from '../projects/ProjectPreviewsSection'
import IndexPageHead from './IndexPageHead'
import IndexPhotos from './IndexPhotos'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
  projects: Project[]
  experiences: Experience[]
  certifications: Certification[]
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, settings, projects, experiences, certifications } =
    props

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading} settings={settings}>
        <Container>
          <IndexHeader settings={settings} level={1} />
        </Container>

        {settings.photoShowcase?.length > 0 && (
          <IndexPhotos
            photos={settings.photoShowcase}
            className="mt-8 md:mt-12 md:mb-2"
          />
        )}

        <Container>
          <div className="flex gap-16 max-xl:flex-col xl:items-start pt-12">
            {projects?.length > 0 && (
              <ProjectPreviewsSection
                projects={projects}
                className="xl:flex-1"
                settings={settings}
              />
            )}
            <div className="flex flex-col gap-8 xl:basis-96">
              {experiences?.length > 0 && (
                <ExperiencePreviewsSection
                  settings={settings}
                  experiences={experiences}
                />
              )}
              {certifications?.length > 0 && (
                <CertificationsPreviewSection
                  settings={settings}
                  certifications={certifications}
                />
              )}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}
