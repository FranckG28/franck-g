import classNames from 'classnames'

import ShowMore from './ShowMore'

export default function SectionHeader({
  title,
  moreHref,
  moreText,
  icon,
  className,
}: {
  title: string
  moreHref?: string
  moreText?: string
  icon?: React.ReactNode
  className?: string
}) {
  return (
    <div className={classNames('flex justify-between items-center', className)}>
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      {moreHref && <ShowMore href={moreHref} text={moreText} />}
    </div>
  )
}
