import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

export default function ProjectLogo({
  coverImage,
  alt,
}: {
  coverImage: any
  alt: string
}) {
  return (
    <div
      className="
          rounded-full shadow-xl border border-zinc-200/20 bg-slate-400/20 
          p-2 w-fit mb-4 
          group-hover:shadow-white/5 transition-all ease-in-out duration-300
        "
    >
      {coverImage ? (
        <Image
          className="
              h-14 w-14 rounded-full aspect-square
              transition-all ease-in-out group-hover:scale-110 duration-300
              brightness-90 group-hover:brightness-110
            "
          width={64}
          height={64}
          alt={`Project icon`}
          src={urlForImage(coverImage).height(200).width(200).url()}
          sizes="200px"
        />
      ) : (
        <div className="h-14 w-14 rounded-full bg-zinc-400"></div>
      )}
    </div>
  )
}
