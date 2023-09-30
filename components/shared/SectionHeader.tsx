import classNames from 'classnames'

import ShowMore from './ShowMore'

export default function SectionHeader({
  title,
  moreHref,
  icon,
  className,
}: {
  title: string
  moreHref?: string
  icon?: React.ReactNode
  className?: string
}) {
  return (
    <div className={classNames('flex justify-between items-center', className)}>
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {moreHref && <ShowMore href={moreHref} />}
    </div>
  )
}
