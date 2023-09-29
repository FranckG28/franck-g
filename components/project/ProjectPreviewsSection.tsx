import ProjectPreview from 'components/project/ProjectPreview'
import { Project } from 'schemas/project'

export default function ProjectPreviewsSection({
  projects,
}: {
  projects: Project[]
}) {
  return (
    <div className="rounded-xl p-2 border border-gray-200/20">
      <h3 className="text-lg">Projets</h3>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectPreview key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
