import classNames from 'classnames'
import Button from 'components/shared/Button'
import Card from 'components/shared/Card'
import SectionHeader from 'components/shared/SectionHeader'
import { Settings } from 'lib/sanity.queries'
import Link from 'next/link'
import { Experience } from 'schemas/experience'

import ExperiencePreview from './ExperiencePreview'

export default function ExperiencePreviewsSection({
  experiences,
  className,
  settings,
}: {
  experiences: Experience[]
  className?: string
  settings: Settings
}) {
  return (
    <Card className={className}>
      <SectionHeader
        title={settings.experiences.previewTitle ?? 'Experiences'}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
            />
          </svg>
        }
      />
      <div className="flex flex-col gap-8">
        {experiences.map((experience) => (
          <ExperiencePreview key={experience.slug} experience={experience} />
        ))}
      </div>
      <Link href="/experiences">
        <Button className="w-full">
          {settings.experiences.showMoreText ?? 'Show more'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      </Link>
    </Card>
  )
}
