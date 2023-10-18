import classNames from 'classnames'

export default function Card({
  children,
  className = '',
}: {
  children: any
  className?: string
}) {
  return (
    <div
      className={classNames(
        'flex flex-col gap-8 border border-zinc-700/40 rounded-xl p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
