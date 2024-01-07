import { Item } from 'lib/models/item'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

export default function ListItem({ item }: { item: Item }) {
  return (
    <article className="group relative flex gap-3 items-center">
      <div
        className="
      rounded-full shadow-lg border border-zinc-200/20 bg-zinc-600 z-10 h-10 w-10
    "
      >
        {item.image && (
          <Image
            className="rounded-full aspect-square"
            width={64}
            height={64}
            alt={item.title}
            src={urlForImage(item.image).height(100).width(100).url()}
            sizes="100px"
          />
        )}
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="font-medium tracking-tight text-lg leading-tight line-clamp-2 text-balance">
          {item.link ? (
            <>
              <div className="absolute -inset-x-2 -inset-y-3 z-0 scale-95 bg-zinc-600/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-4 rounded-2xl"></div>

              <Link href={item.link}>
                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative z-10">{item.title}</span>
              </Link>
            </>
          ) : (
            <span>{item.title}</span>
          )}
        </h3>
        {item.subtitle && (
          <p className="text-sm text-zinc-400 line-clamp-2 leading-snug text-balance">
            {item.subtitle}
          </p>
        )}
      </div>
      {item.subtitle && (
        <p className="text-xs font-light text-zinc-400">{item.right}</p>
      )}
    </article>
  )
}
