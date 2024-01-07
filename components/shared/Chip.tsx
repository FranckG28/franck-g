import classNames from 'classnames'

export default function Chip({
  children,
  selected,
  onSelect,
}: {
  children: React.ReactNode
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      className={classNames(
        `
      inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition
      border hover:border-blue-300/20
       hover:text-blue-300
      `,
        selected
          ? 'bg-blue-300/20 text-blue-300 border-blue-300/20 shadow-lg shadow-blue-300/5'
          : 'text-zinc-300 border-slate-500/20',
      )}
      onClick={onSelect}
    >
      {children}
    </button>
  )
}
