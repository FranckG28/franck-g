import classNames from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

export default function ProjectLogo({
  coverImage,
  alt,
  className,
  size = 'sm',
}: {
  coverImage: any
  alt: string
  className?: string
  size?: 'sm' | 'md'
}) {
  const imageSize = size === 'sm' ? 64 : 128

  return (
    <div
      className={classNames(
        `
        rounded-full shadow-lg border border-zinc-700/50 bg-zinc-800 
        p-2 mb-4 group-hover:shadow-xl shadow-zinc-900/20
        transition
      `,
        className,
        {
          'h-16 w-16': size === 'sm',
          'h-24 w-24': size === 'md',
        },
      )}
    >
      {coverImage && (
        <Image
          className="
              rounded-full aspect-square
              transition group-hover:scale-110
              brightness-90 group-hover:brightness-110
            "
          width={imageSize}
          height={imageSize}
          alt={alt}
          src={urlForImage(coverImage).height(200).width(200).url()}
          sizes="200px"
        />
      )}
    </div>
  )
}
