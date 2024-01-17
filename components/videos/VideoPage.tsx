import IndexPageHead from 'components/home/IndexPageHead'
import Container from 'components/layout/Container'
import Layout from 'components/layout/Layout'
import PageHeader from 'components/shared/PageHeader'
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
            <p>{JSON.stringify(videos)}</p>
          ) : (
            <p className="text-center text-zinc-200 text-sm">
              No videos found.
            </p>
          )}
        </Container>
      </Layout>
    </>
  )
}
