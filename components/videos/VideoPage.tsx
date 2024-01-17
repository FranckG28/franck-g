import { Video } from 'lib/models/video'
import { Settings } from 'lib/sanity.queries'

export default function VideoPage({
  videos,
  settings,
}: {
  videos: Video[]
  settings: Settings
}) {
  return (
    <div>
      <h1>Video Page</h1>
      <pre>{JSON.stringify(videos, null, 2)}</pre>
    </div>
  )
}
