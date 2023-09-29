import LinkPreview from 'components/shared/LinkPreview'
import Tag from 'components/shared/Tag'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from 'schemas/project'

interface ProjectPreviewProps {
  project: Project
}

export default function ProjectPreview(props: ProjectPreviewProps) {
  const { project } = props

  return (
    <div className="group p-3 md:p-6 rounded-3xl hover:bg-zinc-600/20 transition-all duration-200 ease-in-out flex flex-col gap-4">
      <Link href={`/projects/${project.slug}`} className="flex flex-col">
        <div className="rounded-full shadow-xl border border-zinc-200/20 bg-slate-400/20 p-2 w-fit mb-4">
          {project.coverImage ? (
            <Image
              className="
              h-14 w-14 rounded-full aspect-square
              transition-all ease-in-out group-hover:scale-125 duration-300
            "
              width={56}
              height={56}
              alt={`Project icon`}
              src={urlForImage(project.coverImage).height(100).width(100).url()}
              sizes="64px"
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-zinc-400"></div>
          )}
        </div>

        <p className="uppercase font-semibold text-xs text-zinc-400">
          {project.category}
        </p>

        <p className="text-xl tracking-tight font-medium leading-relaxed">
          {project.title}
        </p>

        <p className="line-clamp-3 text-zinc-400 leading-snug">
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
