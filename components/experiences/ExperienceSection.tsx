import classNames from 'classnames'
import LinkPreviewList from 'components/shared/LinkPreviewList'
import ListItem from 'components/shared/ListItem'
import PostBody from 'components/shared/PostBody'
import useDateRangeString from 'lib/hooks/useDateRangeString'
import { FlattenedExperience } from 'lib/models/flattened-experience'
import { Item } from 'lib/models/item'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

export default function ExperienceSection({
  experience,
}: {
  experience: FlattenedExperience
}) {
  return (
    <section
      className="flex max-md:flex-col items-start gap-4 md:gap-8 md:ml-8"
      id={experience.slug}
    >
      <div className="flex gap-8 items-center mt-4 shrink-0 md:basis-52">
        <ExperienceDate
          className="max-md:hidden flex-1 text-right"
          startDate={experience.startDate}
          endDate={experience.endDate}
        />
        {experience.coverImage ? (
          <Image
            className="
                w-12 rounded-full aspect-square shadow-lg transition-all
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
          <div className="w-12 rounded-full bg-zinc-400 shadow-lg"></div>
        )}
      </div>

      <div className="flex flex-col gap-8 max-w-prose flex-1">
        <div>
          <h5 className="text-zinc-300">{experience.place}</h5>
          <h3>{experience.role}</h3>
          <ExperienceDate
            startDate={experience.startDate}
            endDate={experience.endDate}
            className="md:hidden"
          />
          {experience.content && (
            <PostBody content={experience.content} className="text-zinc-400" />
          )}
          {experience.links?.length > 0 && (
            <LinkPreviewList links={experience.links} className="mt-4" />
          )}
        </div>

        {experience.certifications?.length > 0 && (
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

        {experience.projects?.length > 0 && (
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
    </section>
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
    <time className={classNames('text-xs italic text-zinc-400', className)}>
      {dateString}
    </time>
  )
}

function ItemList({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="flex flex-col gap-6">
      <h5>{title}</h5>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-2">
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}
