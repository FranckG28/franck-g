import ListItem from 'components/shared/ListItem'
import { Certification } from 'schemas/certification'

export default function CertificationPreview({
  certification,
}: {
  certification: Certification
}) {
  return (
    <ListItem
      item={{
        title: certification.title,
        image: certification.coverImage,
        subtitle: certification.place,
        right: new Date(certification.date).toLocaleDateString('default', {
          month: 'long',
          year: 'numeric',
        }),
      }}
    />
  )
}
