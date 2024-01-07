import classNames from 'classnames'
import ProjectPreview from 'components/projects/ProjectPreview'
import SectionHeader from 'components/shared/SectionHeader'
import { Settings } from 'lib/sanity.queries'
import { Project } from 'schemas/project'

export default function ProjectPreviewsSection({
  projects,
  className,
  settings,
}: {
  projects: Project[]
  className?: string
  settings: Settings
}) {
  return (
    <div className={classNames('flex flex-col gap-10', className)}>
      <SectionHeader
        title={settings.projects.previewTitle ?? 'Projects'}
        moreHref="/projects"
        moreText={settings.projects.showMoreText}
      />
      <div className="grid gap-16 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectPreview key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
