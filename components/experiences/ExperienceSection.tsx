import classNames from 'classnames'
import PostDate from 'components/PostDate'
import LinkPreviewList from 'components/shared/LinkPreviewList'
import ListItem from 'components/shared/ListItem'
import useDateRangeString from 'lib/hooks/useDateRangeString'
import { FlattenedExperience } from 'lib/models/flattened-experience'
import { Item } from 'lib/models/item'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

import ExperienceContent from './ExperienceContent'

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
          <p className="text-lg text-zinc-300">{experience.place}</p>
          <h2 className="font-medium text-2xl tracking-tight">
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
            <LinkPreviewList links={experience.links} className="mt-4" />
          )}
        </div>

        {experience.certifications && experience.certifications.length > 0 && (
          <ItemList
            title="Certifications"
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
            title="Linked projects"
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
    <time className={classNames('text-xs italic text-zinc-300', className)}>
      {dateString}
    </time>
  )
}

function ItemList({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">{title}</p>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-2">
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}
