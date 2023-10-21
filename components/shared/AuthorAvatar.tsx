import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import { Author } from 'schemas/author'

export default function AuthorAvatar(props: Author) {
  const { name, picture, link } = props
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={picture?.alt ?? name}
        />
      </div>
      <div className="text-lg font-medium">{name}</div>
    </div>
  )
}
