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
        'flex justify-center w-full gap-6 py-3 overflow-hidden',
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

function PhotoCard({ photo }: { photo: Pick<Photo, 'title' | 'image'> }) {
  const getRandomRotation = (): string => {
    return rotations[Math.floor(Math.random() * rotations.length)]
  }

  return (
    <Image
      className={classNames(
        'relative rounded-xl aspect-[9/10] w-32 md:w-64 lg:shadow-xl transition duration-300 brightness-90 hover:brightness-110 scale-95 hover:scale-100',
        getRandomRotation(),
      )}
      width={350}
      height={400}
      alt={photo.title}
      src={urlForImage(photo.image).height(400).width(350).url()}
      sizes="400px"
    />
  )
}
