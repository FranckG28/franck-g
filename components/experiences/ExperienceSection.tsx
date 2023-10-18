import LinkPreviewList from 'components/shared/LinkPreviewList'
import useDateRangeString from 'lib/hooks/useDateRangeString'
import { FlattenedExperience } from 'lib/models/flattened-experience'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

import ExperienceContent from './ExperienceContent'
import classNames from 'classnames'

export default function ExperienceSection({
  experience,
}: {
  experience: FlattenedExperience
}) {
  return (
    <div className="flex max-md:flex-col items-start gap-4 md:gap-8 ml-4 sm:ml-8 mg:ml-0">
      <div className="flex gap-8 items-center mt-4 shrink-0 md:basis-64">
        <ExperienceDate
          className="max-md:hidden flex-1 text-right"
          startDate={experience.startDate}
          endDate={experience.endDate}
        />
        <div className="rounded-full shadow-lg border border-zinc-200/50 bg-white">
          {experience.coverImage ? (
            <Image
              className="
                h-12 w-12 rounded-full aspect-square
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
            <div className="h-12 w-12 rounded-full bg-zinc-400"></div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6 max-w-prose flex-1">
        <div>
          <p className="font-medium text-lg text-zinc-200">
            {experience.place}
          </p>
          <h2 className="font-bold text-2xl tracking-tight">
            {experience.role}
          </h2>
          <ExperienceDate
            startDate={experience.startDate}
            endDate={experience.endDate}
            className="md:hidden"
          />
          {experience.content && (
            <ExperienceContent content={experience.content} />
          )}
          {experience.links && experience.links.length > 0 && (
            <LinkPreviewList
              links={experience.links.map((link) => link.url)}
              className="mt-4"
            />
          )}
        </div>

        {experience.certifications && experience.certifications.length > 0 && (
          <ItemList
            title="Diplômes"
            items={experience.certifications.map((certification) => ({
              title: certification.title,
              subtitle: new Date(certification.date).toLocaleDateString(
                'default',
                { month: 'long', year: 'numeric' },
              ),
              image: certification.coverImage,
            }))}
          />
        )}

        {experience.projects && experience.projects.length > 0 && (
          <ItemList
            title="Projets associés"
            items={experience.projects.map((project) => ({
              title: project.title,
              subtitle: project.category,
              image: project.coverImage,
              link: `/projects/${project.slug}`,
            }))}
          />
        )}
      </div>
    </div>
  )
}

function ExperienceDate({
  startDate,
  endDate,
  className,
}: {
  startDate: string
  endDate: string
  className?: string
}) {
  const dateString = useDateRangeString(startDate, endDate, true)

  return (
    <time
      className={classNames('text-xs font-medium text-zinc-200', className)}
    >
      {dateString}
    </time>
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
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium">{title}</p>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-2">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

function Item({ item }: { item: Item }) {
  return (
    <article className="group relative flex gap-3 items-start">
      <div className="rounded-full border border-zinc-200/10 bg-zinc-400 z-10 shrink-0">
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
              <div className="absolute -inset-x-2 -inset-y-3 z-0 scale-95 bg-zinc-600/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-4 rounded-2xl"></div>

              <Link href={item.link}>
                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative z-10">{item.title}</span>
              </Link>
            </>
          ) : (
            <span>{item.title}</span>
          )}
        </h2>
        <p className="text-sm text-zinc-400 line-clamp-2 z-10">
          {item.subtitle}
        </p>
      </div>
    </article>
  )
}
