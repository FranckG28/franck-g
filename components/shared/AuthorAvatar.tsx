import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import { Author } from 'schemas/author'

import GlowingSurface from './GlowingSurface'

export default function AuthorAvatar(props: Author) {
  const { name, picture, link } = props

  const element = (
    <div className="flex items-center group gap-4">
      <Image
        src={
          picture?.asset?._ref
            ? urlForImage(picture).height(96).width(96).fit('crop').url()
            : 'https://source.unsplash.com/96x96/?face'
        }
        className="rounded-full h-12 w-12"
        height={96}
        width={96}
        alt={picture?.alt ?? name}
      />
      <h5 className="text-zinc-200">{name}</h5>
    </div>
  )

  if (link) {
    return (
      <Link href={link}>
        <GlowingSurface>{element}</GlowingSurface>
      </Link>
    )
  }

  return element
}
