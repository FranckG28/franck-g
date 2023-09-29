import { Experience } from 'schemas/experience'

import ExperiencePreview from './ExperiencePreview'

export default function ExperiencePreviewsSection({
  experiences,
}: {
  experiences: Experience[]
}) {
  return (
    <div className="border border-gray-200/20 rounded-xl p-2">
      <h3 className="text-lg">Expériences</h3>
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperiencePreview key={experience.slug} experience={experience} />
        ))}
      </div>
    </div>
  )
}
