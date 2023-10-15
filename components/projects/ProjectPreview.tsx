import LinkPreview from 'components/shared/LinkPreview'
import Tag from 'components/shared/Tag'
import Link from 'next/link'
import { Project } from 'schemas/project'

import ProjectLogo from './ProjectLogo'

interface ProjectPreviewProps {
  project: Project
}

export default function ProjectPreview(props: ProjectPreviewProps) {
  const { project } = props

  return (
    <div className="group p-3 md:p-6 rounded-3xl hover:bg-zinc-600/20 transition-all duration-200 ease-in-out flex flex-col gap-4">
      <Link href={`/projects/${project.slug}`} className="flex flex-col">
        <ProjectLogo coverImage={project.coverImage} alt={project.title} />

        <p className="uppercase font-semibold text-xs text-zinc-400">
          {project.category}
        </p>

        <p className="text-xl tracking-tight font-medium leading-tight mt-1 mb-2">
          {project.title}
        </p>

        <p className="line-clamp-3 text-zinc-400 leading-snug text-sm">
          {project.excerpt}
        </p>

        {project.tags && project.tags.length && (
          <div className="flex flex-row gap-2 mt-3 flex-wrap">
            {project.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        )}
      </Link>

      {project.links && project.links.length && (
        <LinkPreview href={project.links[0].url} />
      )}
    </div>
  )
}
