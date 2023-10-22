import classNames from 'classnames'
import AlertBanner from 'components/shared/AlertBanner'
import TopBar from 'components/TopBar'
import { Settings } from 'lib/sanity.queries'

import Footer from './Footer'

export default function Layout({
  preview,
  loading,
  children,
  settings,
  className,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
  settings: Settings
  className?: string
}) {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 flex justify-center sm:px-8 -z-10">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full ring-1 bg-zinc-900 ring-zinc-300/20"></div>
        </div>
      </div>
      <AlertBanner preview={preview} loading={loading} />
      <TopBar settings={settings} />
      <main
        className={classNames(
          'flex flex-col justify-center mt-28 lg:mt-36',
          className,
        )}
      >
        {children}
      </main>
      <footer>
        <div className="mt-12 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full h-px bg-zinc-300/20"></div>
          </div>
        </div>
        <Footer settings={settings} />
      </footer>
    </div>
  )
}
