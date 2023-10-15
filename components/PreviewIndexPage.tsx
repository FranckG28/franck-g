import IndexPage, { type IndexPageProps } from 'components/home/IndexPage'
import { latestExperiencesQuery } from 'lib/experience.queries'
import { latestProjectsQuery } from 'lib/project.queries'
import { type Settings, settingsQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
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

  return (
    <IndexPage
      preview
      loading={loadingProjects || loadingSettings}
      projects={projects || []}
      settings={settings || {}}
      experiences={experiences || []}
    />
  )
}
