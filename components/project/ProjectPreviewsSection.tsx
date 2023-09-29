import ProjectPreview from 'components/project/ProjectPreview'
import SectionHeader from 'components/shared/SectionHeader'
import ShowMore from 'components/shared/ShowMore'
import { Project } from 'schemas/project'

export default function ProjectPreviewsSection({
  projects,
}: {
  projects: Project[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="Derniers projets" moreHref="/projets" />
      <div className="grid md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectPreview key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
