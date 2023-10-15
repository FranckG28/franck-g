import classNames from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

export default function ProjectLogo({
  coverImage,
  alt,
  className,
}: {
  coverImage: any
  alt: string
  className?: string
}) {
  return (
    <div
      className={classNames(
        `
      rounded-full shadow-lg border border-zinc-500/30 bg-slate-500/20 
      p-2 w-fit mb-4 group-hover:shadow-xl shadow-zinc-900/20
    transition
      `,
        className,
      )}
    >
      {coverImage ? (
        <Image
          className="
              h-14 w-14 rounded-full aspect-square
              transition group-hover:scale-110
              brightness-90 group-hover:brightness-110
            "
          width={64}
          height={64}
          alt={alt}
          src={urlForImage(coverImage).height(200).width(200).url()}
          sizes="200px"
        />
      ) : (
        <div className="h-14 w-14 rounded-full bg-zinc-400"></div>
      )}
    </div>
  )
}
