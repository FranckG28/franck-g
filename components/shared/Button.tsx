import classNames from 'classnames'

export default function Button({
  children,
  onClick,
  className,
  appearance = 'default',
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  appearance?: 'default' | 'primary' | 'secondary'
}) {
  return (
    <button
      className={classNames(
        `
           hover:brightness-110
          transition-all ease-out duration-200
          active:scale-95
           font-medium text-sm
           py-2 rounded-lg
          
          flex gap-2 items-center justify-center
        `,
        className,
        {
          'bg-blue-700 border-blue-500': appearance === 'primary',
          'bg-zinc-700 border-zinc-600': appearance === 'default',
          'border-transparent bg-transparent text-blue-300 px-4':
            appearance === 'secondary',
          'text-white px-6 shadow-sm hover:shadow-lg border-t':
            appearance !== 'secondary',
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
