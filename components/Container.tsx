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
        mx-auto w-full lg:max-w-7xl 
        px-8 sm:px-16 lg:px-24
      `,
        className,
      )}
    >
      {children}
    </div>
  )
}
