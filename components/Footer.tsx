import classNames from 'classnames'
import * as demo from 'lib/demo.data'
import useHrefActive from 'lib/hooks/useHrefActive'
import useNavigationItems from 'lib/hooks/useNavigationItems'
import { Settings } from 'lib/sanity.queries'
import Link from 'next/link'

import Container from './Container'

export default function Footer({
  settings,
  className,
}: {
  settings: Settings
  className?: string
}) {
  const navigation = useNavigationItems(settings)
  const isActive = useHrefActive()

  return (
    <footer className={classNames('flex justify-center w-full', className)}>
      <Container className="flex gap-4 justify-between items-center border-t !pt-8 !pb-12">
        <nav className="flex gap-6 flex-wrap text-sm font-medium">
          {navigation
            .filter(({ href }) => !isActive(href))
            .map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="hover:text-blue-300 transition"
              >
                {item.name}
              </Link>
            ))}
        </nav>
        <p className="text-sm text-zinc-600">
          {settings.footer ?? demo.footer}
        </p>
      </Container>
    </footer>
  )
}
