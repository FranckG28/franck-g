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
        container mx-auto px-5 md:px-10 lg:px-20 pt-24 pb-10
        bg-stone-800 border-l border-r border-stone-700 
        min-h-full max-w-screen-xl
        `,
        className,
      )}
    >
      {children}
    </div>
  )
}
