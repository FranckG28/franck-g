import classNames from 'classnames'

export default function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      className={classNames(
        `
      bg-zinc-700 hover:brightness-110
        transition-all ease-out duration-200
        active:scale-95
        text-white font-medium text-sm
        px-4 py-2 rounded-lg
        shadow-sm hover:shadow-lg
        border-t border-zinc-600
        flex gap-2 items-center justify-center
        `,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
