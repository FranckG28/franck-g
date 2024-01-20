import classNames from 'classnames'
import IndexPageHead from 'components/home/IndexPageHead'
import Container from 'components/layout/Container'
import Layout from 'components/layout/Layout'
import Button from 'components/shared/Button'
import PageHeader from 'components/shared/PageHeader'
import { Video } from 'lib/models/video'
import { Settings } from 'lib/sanity.queries'
import Link from 'next/link'

import VideoPreview from './VideoPreview'

export default function VideoPage({
  videos,
  settings,
}: {
  videos: Video[]
  settings: Settings
}) {
  return (
    <>
      <IndexPageHead
        settings={settings}
        pageName={settings.videos?.name ?? 'Videos'}
      />

      <Layout preview={false} loading={false} settings={settings}>
        <Container className="flex flex-col gap-8 animate-fade-up">
          <PageHeader
            sectionSettings={settings.videos}
            defaultName="Videos"
            defaultDescription="A collection of my videos."
          />

          {videos?.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {videos.map((video, index) => (
                <VideoPreview
                  key={video.id.videoId}
                  video={video}
                  className={classNames(
                    'animate-fade-up',
                    index === 0 ? 'md:col-span-2 md:row-span-2' : '',
                  )}
                  size={index === 0 ? 'lg' : 'md'}
                >
                  {index === 0 && (
                    <div className="bg-blue-200/20 text-blue-200 rounded-full font-medium px-3 py-1 w-fit flex items-center gap-2 absolute bottom-4 left-4 backdrop-blur ring-1 ring-blue-200/30">
                      <div className="inline-block w-2 h-2 bg-blue-200 rounded-full"></div>
                      Latest video
                    </div>
                  )}
                </VideoPreview>
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-200 text-sm">
              {settings.videos?.emptyMessage ?? 'No videos found.'}
            </p>
          )}

          <Link
            href={'https://youtube.com/channel/' + settings.youtubeChannelId}
            target="_blank"
            className="mx-auto"
          >
            <Button appearance="primary">Show more videos →</Button>
          </Link>
        </Container>
      </Layout>
    </>
  )
}
