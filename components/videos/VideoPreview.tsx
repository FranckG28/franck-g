import classNames from 'classnames'
import GlowingSurface from 'components/shared/GlowingSurface'
import { Video } from 'lib/models/video'
import { formatDate } from 'lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function VideoPreview({
  video,
  className,
  bigPicture = false,
  children,
}: {
  video: Video
  className?: string
  bigPicture?: boolean
  children?: React.ReactNode
}) {
  const thumnail = bigPicture
    ? video.snippet.thumbnails.high
    : video.snippet.thumbnails.medium

  return (
    <Link
      href={`https://youtu.be/${video.id.videoId}`}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GlowingSurface>
        <div className="flex flex-col gap-4 group select-none">
          <div className="relative">
            <Image
              src={thumnail.url}
              width={thumnail.width}
              height={thumnail.height}
              className="rounded-xl shadow-lg border-t border-zinc-300/10 aspect-video object-cover brightness-90 transition group-hover:brightness-100 w-full"
              alt={video.snippet.title}
            />
            {children}
          </div>
          <div className="">
            <p
              className={classNames(
                'tracking-tight font-medium line-clamp-2 text-balance',
                bigPicture ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
              )}
              dangerouslySetInnerHTML={{ __html: video.snippet.title }}
            />
            <p className="text-sm font-medium text-zinc-400 mt-1">
              {formatDate(video.snippet.publishedAt)}
            </p>
            {bigPicture && video.snippet.description && (
              <p
                className="text-sm text-zinc-500 line-clamp-4 mt-2"
                dangerouslySetInnerHTML={{ __html: video.snippet.description }}
              />
            )}
          </div>
        </div>
      </GlowingSurface>
    </Link>
  )
}
