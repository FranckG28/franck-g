import PostBody from 'components/PostBody'
import useDateRangeString from 'lib/hooks/useDateRangeString'
import { FlattenedExperience } from 'lib/models/flattened-experience'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

export default function ExperienceSection({
  experience,
}: {
  experience: FlattenedExperience
}) {
  const dateString = useDateRangeString(
    experience.startDate,
    experience.endDate,
    true,
  )

  return (
    <div className="flex items-start gap-8">
      <time className="basis-52 shrink-0 text-xs font-bold text-zinc-200">
        {dateString}
      </time>
      <div className="rounded-full shadow-lg border border-zinc-200/50 bg-white shrink-0">
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
      <div className="flex flex-col gap-4 max-w-prose">
        <div>
          <p className="font-medium text-zinc-200">{experience.place}</p>
          <h2 className="font-bold text-xl tracking-tight">
            {experience.role}
          </h2>
        </div>

        {experience.content && <PostBody content={experience.content} />}

        {experience.certifications && experience.certifications.length > 0 && (
          <ItemList
            title="Diplômes"
            items={experience.certifications.map((certification) => ({
              title: certification.title,
              subtitle: certification.date,
              image: certification.coverImage,
            }))}
          />
        )}

        {experience.projects && experience.projects.length > 0 && (
          <ItemList
            title="Projets associés"
            items={experience.projects.map((project) => ({
              title: project.title,
              subtitle: project.startDate,
              image: project.coverImage,
              link: `/projects/${project.slug}`,
            }))}
          />
        )}
      </div>
    </div>
  )
}

interface Item {
  title: string
  subtitle: string
  image: any
  link?: string
}

function ItemList({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">{title}</p>

      <div className="grid mg:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

function Item({ item }: { item: Item }) {
  return (
    <article className="group relative flex gap-4 items-start">
      <div className="rounded-full shadow-lg border border-zinc-200/50 bg-white z-10">
        {item.image ? (
          <Image
            className="
              h-10 w-10 rounded-full aspect-square
            "
            width={64}
            height={64}
            alt={item.title}
            src={urlForImage(item.image).height(100).width(100).url()}
            sizes="100px"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-zinc-400"></div>
        )}
      </div>

      <div>
        <h2 className="text-base font-semibold tracking-tight text-zinc-200">
          {item.link ? (
            <>
              <div className="absolute -inset-x-2 -inset-y-3 z-0 scale-95 bg-zinc-600/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-4 sm:rounded-2xl"></div>

              <Link href={item.link}>
                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative z-10">{item.title}</span>
              </Link>
            </>
          ) : (
            <span>{item.title}</span>
          )}
        </h2>
        <p className="text-sm text-zinc-400 z-10">{item.subtitle}</p>
      </div>
    </article>
  )
}
