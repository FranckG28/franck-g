import { Experience } from 'schemas/experience'

export default function ExperiencePreview({
  experience,
}: {
  experience: Experience
}) {
  const getYear = (date: string) => {
    if (!date) return null
    return new Date(date).getFullYear()
  }
  const startYear = getYear(experience.startDate)
  const endYear = getYear(experience.endDate)

  return (
    <div className="p-2 rounded-xl hover:bg-zinc-200/20 transition flex gap-2 items-center">
      <div className="h-12 w-12 rounded-full bg-zinc-400"></div>
      <div className="flex flex-col flex-1">
        <p className="font-medium">{experience.place}</p>
        <p className="text-sm">{experience.role}</p>
      </div>
      <p className="text-sm">{startYear + (endYear && ' - ') + endYear}</p>
    </div>
  )
}
