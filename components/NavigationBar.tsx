import classNames from 'classnames'
import useHrefActive from 'lib/hooks/useHrefActive'
import { Navigation } from 'lib/models/navigation'
import Link from 'next/link'

export default function NavigationBar({
  items,
  className,
}: {
  items: Navigation[]
  className?: string
}) {
  const isActive = useHrefActive()

  return (
    <>
      {items && items.length > 0 && (
        <nav
          className={classNames(
            `bg-zinc-800 border-t border-zinc-700/50 shadow rounded-full
          flex items-center justify-center gap-6 py-2 px-4 overflow-hidden`,
            className,
          )}
        >
          {items.map((item, index) => (
            <article
              className="group relative flex flex-col items-start"
              key={index}
            >
              <p
                className={classNames(
                  'transition font-medium text-sm hover:text-blue-300',
                  isActive(item.href) ? 'text-blue-300' : 'text-zinc-200',
                )}
              >
                <Link href={item.href}>
                  <span className="absolute -inset-x-4 -inset-y-2 z-20 sm:-inset-x-6 rounded-full">
                    {isActive(item.href) && (
                      <span className="absolute inset-x-6 bottom-px h-px bg-gradient-to-r from-teal-500/0 via-blue-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-blue-400/40 dark:to-teal-400/0"></span>
                    )}
                  </span>
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </p>
            </article>
          ))}
        </nav>
      )}
    </>
  )
}
