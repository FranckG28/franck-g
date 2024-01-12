import { Item } from 'lib/models/item'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

import GlowingSurface from './GlowingSurface'

export default function ListItem({ item }: { item: Item }) {
  const element = (
    <article className="group relative flex gap-3 items-center">
      <div className="rounded-full shadow-lg border border-zinc-200/20 bg-zinc-600 z-10 h-10 w-10">
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
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="text-sm text-zinc-400 italic line-clamp-2 leading-snug text-balance">
            {item.subtitle}
          </p>
        )}
      </div>
      {item.subtitle && (
        <p className="text-xs font-light text-zinc-400">{item.right}</p>
      )}
    </article>
  )

  if (item.link) {
    return (
      <Link href={item.link}>
        <GlowingSurface className="!-inset-x-5 !-inset-y-4">
          {element}
        </GlowingSurface>
      </Link>
    )
  }

  return element
}
