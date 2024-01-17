import GlowingSurface from 'components/shared/GlowingSurface'
import Tag from 'components/shared/Tag'
import Link from 'next/link'
import { Project } from 'schemas/project'

import ProjectLogo from './ProjectLogo'

interface ProjectPreviewProps {
  project: Project
  className?: string
}

export default function ProjectPreview(props: ProjectPreviewProps) {
  const { project, className } = props

  return (
    <Link href={`/projects/${project.slug}`} className={className}>
      <GlowingSurface>
        <article className="flex flex-col items-start">
          <ProjectLogo
            coverImage={project.coverImage}
            alt={project.title}
            className="z-10"
          />

          <p className="uppercase font-medium text-xs text-zinc-400 z-10">
            {project.category}
          </p>

          <h4 className="mt-1 mb-2">{project.title}</h4>

          <p className="line-clamp-3 text-zinc-400 text-sm z-10 text-balance max-w-prose">
            {project.excerpt}
          </p>

          {project.tags && project.tags.length && (
            <div className="flex flex-row gap-2 mt-3 flex-wrap z-10">
              {project.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          )}
        </article>
      </GlowingSurface>
    </Link>
  )
}
