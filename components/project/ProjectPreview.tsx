import LinkPreview from 'components/shared/LinkPreview'
import Tag from 'components/shared/Tag'
import Link from 'next/link'
import { Project } from 'schemas/project'

interface ProjectPreviewProps {
  project: Project
}

export default function ProjectPreview(props: ProjectPreviewProps) {
  const { project } = props

  return (
    <div className="-m-2 p-4 rounded-xl hover:bg-gray-100/20 flex flex-col gap-2">
      <div className="h-12 w-12 rounded-full bg-gray-400"></div>
      <p className="uppercase font-medium text-sm">{project.category}</p>
      <Link href={`/projects/${project.slug}`}>
        <p className="text-lg">{project.title}</p>
      </Link>
      <p className="text-sm line-clamp-3">{project.excerpt}</p>
      <div className="flex flex-row gap-2 flex-wrap">
        {project.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      {project.links && project.links.length && (
        <LinkPreview href={project.links[0].url} />
      )}
    </div>
  )
}
