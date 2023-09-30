import classNames from 'classnames'
import ProjectPreview from 'components/projects/ProjectPreview'
import SectionHeader from 'components/shared/SectionHeader'
import { Project } from 'schemas/project'

export default function ProjectPreviewsSection({
  projects,
  className,
}: {
  projects: Project[]
  className?: string
}) {
  return (
    <div className={classNames('flex flex-col gap-4', className)}>
      <SectionHeader title="Derniers projets" moreHref="/projects" />
      <div className="grid md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectPreview key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
