import { Navigation } from 'lib/models/navigation'
import { Settings } from 'lib/sanity.queries'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

import IndexHeader from './home/IndexHeader'
import NavigationBar from './shared/NavigationBar'

export default function TopBar({ settings }: { settings: Settings }) {
  const navItems: Navigation[] = [
    {
      name: settings.projects.title ?? 'Projects',
      href: '/projects',
    },
    {
      name: settings.experiences.title ?? 'Experiences',
      href: '/experiences',
    },
  ]

  const router = useRouter()

  const isActive = useCallback(
    (href: string) => {
      if (href === '/') return router.pathname === '/'
      return router.pathname.startsWith(href)
    },
    [router],
  )

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center z-40">
      <div className="w-full max-w-7xl relative sm:mx-4 md:mx-12 lg:mx-20 px-5 md:px-10 lg:px-20">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900 via-zinc-900/60 to-zinc-900/0 z-30 pointer-events-none"></div>

        {!isActive('/') && (
          <div className="absolute top-5 z-40">
            <IndexHeader
              title={settings.title}
              level={2}
              logo={settings.logo}
            ></IndexHeader>
          </div>
        )}
        <NavigationBar
          items={navItems}
          className="absolute left-1/2 top-6 -translate-x-1/2 z-40"
          isActive={isActive}
        />
      </div>
    </header>
  )
}
