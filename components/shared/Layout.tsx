import AlertBanner from 'components/shared/AlertBanner'
import { Navigation } from 'lib/models/navigation'

import NavigationBar from './NavigationBar'

export default function Layout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  const navItems: Navigation[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Experiences',
      href: '/experiences',
    },
  ]

  return (
    <>
      <div className="min-h-screen relative">
        <AlertBanner preview={preview} loading={loading} />
        <NavigationBar
          items={navItems}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-30"
        />
        <main>{children}</main>
      </div>
    </>
  )
}
