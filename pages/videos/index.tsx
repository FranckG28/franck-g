import VideoPage from 'components/videos/VideoPage'
import { Video } from 'lib/models/video'
import { readToken } from 'lib/sanity.api'
import { getClient, getSettings } from 'lib/sanity.client'
import { Settings } from 'lib/sanity.queries'
import { fetchChannelVideos } from 'lib/youtube'
import { GetStaticProps } from 'next'
import { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  videos: Video[]
  settings: Settings
}

export default function Page(props: PageProps) {
  const { videos, settings } = props

  return <VideoPage videos={videos} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const settings = await getSettings(client)

  const videos = await fetchChannelVideos(
    settings.youtubeChannelId,
    process.env.YOUTUBE_API_KEY,
    100,
  )

  return {
    props: {
      videos,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
