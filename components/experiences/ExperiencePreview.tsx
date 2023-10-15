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
    <article className="group relative flex gap-3 items-center">
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
        <h2 className="font-medium tracking-tight text-lg leading-tight line-clamp-2">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-zinc-600/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-4 sm:rounded-2xl"></div>
          <Link href={`/experiences/${experience.slug}`}>
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{experience.place}</span>
          </Link>
        </h2>
        <p className="text-sm text-zinc-400 line-clamp-2 leading-snug">
          {experience.role}
        </p>
      </div>
      <p className="text-xs font-light text-zinc-400">{dateRange}</p>
    </article>
  )
}
