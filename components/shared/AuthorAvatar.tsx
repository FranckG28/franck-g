import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import { Author } from 'schemas/author'

export default function AuthorAvatar(props: Author) {
  const { name, picture, link } = props
  return (
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
      <div className="text-lg font-medium">
        {link ? (
          <>
            <div className="absolute -inset-x-2 -inset-y-2 z-0 scale-95 bg-zinc-600/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 rounded-2xl"></div>

            <Link href={link}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{name}</span>
            </Link>
          </>
        ) : (
          <span>{name}</span>
        )}
      </div>
    </div>
  )
}
