import classNames from 'classnames'
import GlowingSurface from 'components/shared/GlowingSurface'
import { Video } from 'lib/models/video'
import Image from 'next/image'
import Link from 'next/link'

export default function VideoPreview({
  video,
  className,
  bigPicture = false,
}: {
  video: Video
  className?: string
  bigPicture?: boolean
}) {
  const date = new Date(video.snippet.publishedAt)
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
          <Image
            src={thumnail.url}
            width={thumnail.width}
            height={thumnail.height}
            className="rounded-xl shadow-lg border-t border-slate-300/10 aspect-video object-cover brightness-90 transition group-hover:brightness-100 w-full"
            alt={video.snippet.title}
          />
          <div className="">
            <p
              className={classNames(
                'tracking-tight font-medium line-clamp-2',
                bigPicture ? 'text-2xl' : 'text-xl',
              )}
              dangerouslySetInnerHTML={{ __html: video.snippet.title }}
            />
            <p className="text-sm font-medium text-zinc-400">
              {date.toLocaleDateString()}
            </p>
            {bigPicture && video.snippet.description && (
              <p
                className="text-sm text-zinc-400 line-clamp-4 mt-2"
                dangerouslySetInnerHTML={{ __html: video.snippet.description }}
              />
            )}
          </div>
        </div>
      </GlowingSurface>
    </Link>
  )
}
