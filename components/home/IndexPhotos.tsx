import classNames from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import { Photo } from 'schemas/photo'

export default function IndexPhotos({
  photos,
  className,
}: {
  photos: Pick<Photo, 'title' | 'image'>[]
  className?: string
}) {
  return (
    <div
      className={classNames(
        'flex justify-center w-full gap-2 md:gap-3 lg:gap-6 py-3 overflow-hidden',
        className,
      )}
    >
      {photos.map((photo, index) => (
        <PhotoCard key={index} photo={photo} />
      ))}
    </div>
  )
}

const rotations = ['rotate-2 hover:rotate-1', '-rotate-2 hover:-rotate-1']

function PhotoCard({
  photo,
}: {
  photo: Pick<Photo, 'title' | 'image' | 'excerpt'>
}) {
  const getRandomRotation = (): string => {
    return rotations[Math.floor(Math.random() * rotations.length)]
  }

  return (
    <div
      className={classNames(
        'relative rounded-xl aspect-[9/10] w-32 md:w-64 lg:shadow-xl transition duration-300 brightness-90 hover:brightness-110 scale-95 hover:scale-100 overflow-hidden group max-md:pointer-events-none',
        getRandomRotation(),
      )}
    >
      {photo.excerpt && (
        <p
          className={`
          absolute z-10 p-4 left-0 line-clamp-2 text-zinc-200 
          bg-gradient-to-t from-zinc-900/80 via-zinc-900/80 via-50% w-full font-medium italic
          transition-all group-hover:bottom-0 -bottom-8 opacity-0 group-hover:opacity-100 duration-300 
          scale-95 group-hover:scale-100 text-sm
        `}
        >
          {photo.excerpt}
        </p>
      )}
      <Image
        className=""
        width={350}
        height={400}
        alt={photo.title}
        src={urlForImage(photo.image).height(400).width(350).url()}
        sizes="400px"
      />
    </div>
  )
}
