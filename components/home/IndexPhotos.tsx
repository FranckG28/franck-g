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
    <div className={classNames('flex gap-6', className)}>
      {photos.map((photo, index) => (
        <PhotoCard key={index} photo={photo} />
      ))}
    </div>
  )
}

const rotations = ['rotate-2 hover:rotate-1', '-rotate-2 hover:-rotate-1']

function getRandomRotation(): string {
  return rotations[Math.floor(Math.random() * rotations.length)]
}

function PhotoCard({ photo }: { photo: Pick<Photo, 'title' | 'image'> }) {
  return (
    <Image
      className={classNames(
        'rounded-xl h-64 w-52 shadow-xl transition duration-300 brightness-90 hover:brightness-110 hover:scale-105',
        getRandomRotation(),
      )}
      width={300}
      height={400}
      alt={photo.title}
      src={urlForImage(photo.image).height(400).width(300).url()}
      sizes="400px"
    />
  )
}
