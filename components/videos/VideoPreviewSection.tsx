import classNames from 'classnames'
import SectionHeader from 'components/shared/SectionHeader'
import { Video } from 'lib/models/video'
import { Settings } from 'lib/sanity.queries'

import VideoPreview from './VideoPreview'

export default function VideoPreviewSection({
  videos,
  className,
  settings,
}: {
  videos: Video[]
  className?: string
  settings: Settings
}) {
  return (
    <div className={classNames('flex flex-col gap-10', className)}>
      <SectionHeader
        title={settings.videos?.previewTitle ?? 'Videos'}
        moreHref="/videos"
        moreText={settings.videos?.showMoreText}
      />
      <div className="grid gap-12 md:grid-cols-3">
        {videos.map((video, index) => (
          <VideoPreview key={index} video={video} />
        ))}
      </div>
    </div>
  )
}
