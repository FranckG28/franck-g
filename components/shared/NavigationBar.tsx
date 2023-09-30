import classNames from 'classnames'
import { Navigation } from 'lib/models/navigation'
import Link from 'next/link'

export default function NavigationBar({
  items,
  className,
}: {
  items: Navigation[]
  className?: string
}) {
  return (
    <>
      {items && items.length > 0 && (
        <nav
          className={classNames(
            `bg-zinc-700 border-t border-zinc-600 shadow-xl rounded-full
          flex items-center justify-center p-1 -space-x-4`,
            className,
          )}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white text-medium text-base px-6 py-2 rounded-full hover:bg-zinc-200/20 transition-all ease-in-out"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}
