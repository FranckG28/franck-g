import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import classNames from 'classnames'
import TopBar from 'components/layout/TopBar'
import AlertBanner from 'components/shared/AlertBanner'
import { Settings } from 'lib/sanity.queries'

import Footer from './Footer'
import LayoutAnimatedPattern from './LayoutAnimatedPattern'
import LayoutBackground from './LayoutBackground'

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
    <>
      <LayoutAnimatedPattern />
      <div className="relative">
        <LayoutBackground />
        <AlertBanner preview={preview} loading={loading} />
        <TopBar settings={settings} />
        <main
          className={classNames(
            'flex flex-col justify-center mt-28 lg:mt-36',
            className,
          )}
        >
          {children}
          <Analytics />
          <SpeedInsights />
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
    </>
  )
}
