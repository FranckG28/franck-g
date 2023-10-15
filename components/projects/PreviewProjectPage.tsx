import { projectBySlugQuery } from 'lib/project.queries'
import { Settings, settingsQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import { Project } from 'schemas/project'

import ProjectPage, { ProjectPageProps } from './ProjectPage'

export default function PreviewProjectPage(props: ProjectPageProps) {
  const [{ project: projectPreview }, loadingProject] = useLiveQuery<{
    project: Project
  }>({ project: props.project }, projectBySlugQuery, {
    slug: props.project.slug,
  })
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <ProjectPage
      preview
      loading={loadingProject || loadingSettings}
      project={projectPreview}
      settings={settings}
    />
  )
}
