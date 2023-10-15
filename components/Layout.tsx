import AlertBanner from 'components/shared/AlertBanner'
import TopBar from 'components/TopBar'
import { Settings } from 'lib/sanity.queries'

import Footer from './Footer'

export default function Layout({
  preview,
  loading,
  children,
  settings,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
  settings: Settings
}) {
  return (
    <>
      <div className="min-h-screen relative">
        <AlertBanner preview={preview} loading={loading} />
        <TopBar settings={settings} />
        <main className="flex justify-center">{children}</main>
        <Footer settings={settings} />
      </div>
    </>
  )
}
