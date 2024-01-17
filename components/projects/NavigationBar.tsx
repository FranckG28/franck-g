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
            `bg-zinc-800/90 backdrop-blur shadow-lg rounded-full shadow-zinc-900/10 ring-1 ring-white/10 
            flex items-center justify-center gap-6 py-3 px-6 overflow-hidden`,
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
                  <span className="absolute -inset-x-4 -inset-y-3 z-20 sm:-inset-x-6 rounded-full">
                    {isActive(item.href) && (
                      <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0"></span>
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
