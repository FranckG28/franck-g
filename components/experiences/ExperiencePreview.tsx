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
    <article className="flex gap-3 items-center">
      <div
        className="
        rounded-full shadow-lg border border-zinc-200/50 bg-white 
      "
      >
        {experience.coverImage ? (
          <Image
            className="
              h-10 w-10 rounded-full aspect-square
            "
            width={64}
            height={64}
            alt={experience.place}
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
        <h4 className="font-medium tracking-tight text-lg leading-tight line-clamp-2">
          {experience.place}
        </h4>
        <p className="text-sm text-zinc-400 line-clamp-2 leading-snug">
          {experience.role}
        </p>
      </div>
      <p className="text-xs font-light text-zinc-400">{dateRange}</p>
    </article>
  )
}
