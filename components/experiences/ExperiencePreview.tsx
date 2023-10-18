import ListItem from 'components/shared/ListItem'
import useDateRangeString from 'lib/hooks/useDateRangeString'
import { Experience } from 'schemas/experience'

export default function ExperiencePreview({
  experience,
}: {
  experience: Experience
}) {
  const dateRange = useDateRangeString(experience.startDate, experience.endDate)

  return (
    <ListItem
      item={{
        title: experience.place,
        subtitle: experience.role,
        right: dateRange,
        image: experience.coverImage,
      }}
    />
  )
}
