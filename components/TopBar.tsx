import useHrefActive from 'lib/hooks/useHrefActive'
import useNavigationItems from 'lib/hooks/useNavigationItems'
import { Settings } from 'lib/sanity.queries'

import Container from './Container'
import IndexHeader from './home/IndexHeader'
import NavigationBar from './NavigationBar'

export default function TopBar({ settings }: { settings: Settings }) {
  const navigationItems = useNavigationItems(settings)
  const isActive = useHrefActive()

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center z-40">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900 via-zinc-900/60 to-zinc-900/0 z-30 pointer-events-none"></div>

      <Container>
        {!isActive('/') && (
          <div className="absolute top-6 z-40">
            <IndexHeader settings={settings} level={2}></IndexHeader>
          </div>
        )}
        <NavigationBar
          items={navigationItems.filter((item) => item.href !== '/')}
          className="absolute left-1/2 top-6 -translate-x-1/2 z-40"
        />
      </Container>
    </header>
  )
}
