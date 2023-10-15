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
    <div className={classNames('flex flex-col gap-4', className)}>
      <SectionHeader
        title={settings.projects.previewTitle}
        moreHref="/projects"
        moreText={settings.projects.showMoreText}
      />
      <div className="grid md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectPreview key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
