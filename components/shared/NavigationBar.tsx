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
          flex items-center justify-center gap-8 py-2 px-6`,
            className,
          )}
        >
          {items.map((item, index) => (
            <article
              className="group relative flex flex-col items-start"
              key={index}
            >
              <p className="text-zinc-100 font-medium text-base">
                <div className="absolute -inset-x-4 -inset-y-2 z-0 scale-95 bg-zinc-400/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 rounded-full"></div>
                <Link href={item.href}>
                  <span className="absolute -inset-x-4 -inset-y-2 z-20 sm:-inset-x-6 rounded-full"></span>
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
