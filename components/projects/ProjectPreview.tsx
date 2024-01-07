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
    <article className="group relative flex flex-col items-start">
      <ProjectLogo
        coverImage={project.coverImage}
        alt={project.title}
        className="z-10"
      />

      <p className="uppercase font-semibold text-xs text-zinc-400 z-10">
        {project.category}
      </p>

      <h2 className="text-xl tracking-tight font-medium leading-tight mt-1 mb-2">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-600/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 rounded-2xl"></div>
        <Link href={`/projects/${project.slug}`}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{project.title}</span>
        </Link>
      </h2>

      <p className="line-clamp-3 text-zinc-400 leading-snug text-sm z-10 text-balance">
        {project.excerpt}
      </p>

      {project.tags && project.tags.length && (
        <div className="flex flex-row gap-2 mt-3 flex-wrap z-10">
          {project.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
      )}
      {/* 
      {project.links && project.links.length && (
        <LinkPreview href={project.links[0].url} />
      )} */}
    </article>
  )
}
