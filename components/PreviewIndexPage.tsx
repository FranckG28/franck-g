import IndexPage, { type IndexPageProps } from 'components/home/IndexPage'
import { latestCertificationsQuery } from 'lib/certifications.queries'
import { latestExperiencesQuery } from 'lib/experience.queries'
import { latestProjectsQuery } from 'lib/project.queries'
import { type Settings, settingsQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import { Certification } from 'schemas/certification'
import { Experience } from 'schemas/experience'
import { Project } from 'schemas/project'

export default function PreviewIndexPage(props: IndexPageProps) {
  const [projects, loadingProjects] = useLiveQuery<Project[]>(
    props.projects,
    latestProjectsQuery,
  )
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  const [experiences, loadingExperiences] = useLiveQuery<Experience[]>(
    props.experiences,
    latestExperiencesQuery,
  )

  const [certifications, loadingCertifications] = useLiveQuery<Certification[]>(
    props.certifications,
    latestCertificationsQuery,
  )

  return (
    <IndexPage
      preview
      loading={loadingProjects || loadingSettings}
      projects={projects || []}
      settings={settings || {}}
      experiences={experiences || []}
      certifications={certifications || []}
    />
  )
}
