import ShowMore from './ShowMore'

export default function SectionHeader({
  title,
  moreHref,
  icon,
}: {
  title: string
  moreHref?: string
  icon?: React.ReactNode
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {moreHref && <ShowMore href={moreHref} />}
    </div>
  )
}
