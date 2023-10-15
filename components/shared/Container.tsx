import classNames from 'classnames'

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={classNames(
        `
        max-w-7xl w-full
        bg-zinc-900 border-l border-r border-zinc-800 
        sm:mx-4 md:mx-12 lg:mx-20 px-5 md:px-10 lg:px-20 pt-28 sm:pt-32 lg:pt-40 pb-20
        `,
        className,
      )}
    >
      {children}
    </div>
  )
}
