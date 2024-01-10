import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import { Author } from 'schemas/author'

import GlowingSurface from './GlowingSurface'

export default function AuthorAvatar(props: Author) {
  const { name, picture, link } = props

  const element = (
    <div className="flex items-center group relative">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full z-10"
          height={96}
          width={96}
          alt={picture?.alt ?? name}
        />
      </div>
      <p className="text-lg font-medium">{name}</p>
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
