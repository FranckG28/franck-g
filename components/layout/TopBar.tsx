import Tooltip from 'components/shared/Tooltip'
import useHrefActive from 'lib/hooks/useHrefActive'
import useNavigationItems from 'lib/hooks/useNavigationItems'
import { Settings } from 'lib/sanity.queries'

import IndexHeader from '../home/IndexHeader'
import NavigationBar from '../projects/NavigationBar'
import Container from './Container'
import MobileNavigation from './MobileNavigation'

export default function TopBar({ settings }: { settings: Settings }) {
  const navigationItems = useNavigationItems(settings)
  const isActive = useHrefActive()

  return (
    <header className="fixed top-0 left-0 w-screen flex justify-center z-40">
      <div className="absolute top-0 left-0 w-screen h-24 bg-gradient-to-b from-zinc-900/80 z-30 pointer-events-none [mask-image:linear-gradient(to_bottom,#18181b_25%,transparent)] backdrop-blur-[1px]"></div>

      <Container className="z-40 flex gap-3 pt-6">
        {!isActive('/') && (
          <Tooltip content="Home" side="right">
            <IndexHeader settings={settings} level={2}></IndexHeader>
          </Tooltip>
        )}
        <NavigationBar
          items={navigationItems.filter((item) => item.href !== '/')}
          className="max-md:hidden absolute left-1/2 top-6 -translate-x-1/2 z-40"
        />
        <MobileNavigation className="md:hidden" settings={settings} />
      </Container>
    </header>
  )
}
