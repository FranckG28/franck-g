import { Item } from 'lib/models/item'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

import GlowingSurface from './GlowingSurface'

export default function ListItem({ item }: { item: Item }) {
  const element = (
    <article className="group relative flex gap-3">
      <div className="rounded-full shadow-lg ring-1 ring-white/10 bg-zinc-600 z-10 h-10 w-10">
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
      <div className="flex flex-col flex-1 gap-1">
        <h6 className="line-clamp-3 leading-tight">{item.title}</h6>
        {item.subtitle && (
          <p className="text-sm text-zinc-400 line-clamp-2 text-balance">
            {item.subtitle}
          </p>
        )}
      </div>
      {item.subtitle && (
        <p className="text-xs font-light text-zinc-400 italic">{item.right}</p>
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
