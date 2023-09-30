import useDateRangeString from 'lib/hooks/useDateRangeString'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import { Experience } from 'schemas/experience'

export default function ExperiencePreview({
  experience,
}: {
  experience: Experience
}) {
  const dateRange = useDateRangeString(experience.startDate, experience.endDate)

  return (
    <Link
      href={`/experiences/${experience.slug}`}
      className="
      py-3 px-6 rounded-3xl 
    hover:bg-zinc-600/20 transition-all 
      flex gap-3 items-center group
    "
    >
      <div
        className="
        rounded-full shadow-xl border bg-white 
        group-hover:scale-110 transition-all ease-in-out duration-300
      group-hover:shadow-white/10
      "
      >
        {experience.coverImage ? (
          <Image
            className="
              h-10 w-10 rounded-full aspect-square
              transition-all ease-in-out duration-300
              brightness-90 group-hover:brightness-110
            "
            width={64}
            height={64}
            alt={`Experience icon`}
            src={urlForImage(experience.coverImage)
              .height(100)
              .width(100)
              .url()}
            sizes="100px"
          />
        ) : (
          <div className="h-14 w-14 rounded-full bg-zinc-400"></div>
        )}
      </div>
      <div className="flex flex-col flex-1">
        <p className="font-medium tracking-tight text-lg leading-tight line-clamp-2">
          {experience.place}
        </p>
        <p className="text-sm text-zinc-400 line-clamp-2 leading-snug">
          {experience.role}
        </p>
      </div>
      <p className="text-xs font-light text-zinc-400">{dateRange}</p>
    </Link>
  )
}
