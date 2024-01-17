import classNames from 'classnames'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/shared/Dialog'
import useNavigationItems from 'lib/hooks/useNavigationItems'
import { Settings } from 'lib/sanity.queries'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'

export default function MobileNavigation({
  settings,
  className,
}: {
  settings: Settings
  className?: string
}) {
  const items = useNavigationItems(settings)

  return (
    <Dialog>
      <DialogTrigger
        className={classNames(
          'rounded-full h-12 px-6 bg-zinc-800/70 shadow-lg shadow-zinc-900/10 ring-1 ring-white/10 backdrop-blur flex justify-center items-center gap-3',
          className,
        )}
      >
        {' '}
        Menu
        <FiChevronDown />
      </DialogTrigger>
      <DialogContent className="!top-6 !translate-y-0">
        <DialogHeader>
          <DialogTitle>Menu</DialogTitle>
        </DialogHeader>
        <nav className="flex flex-col divide-y divide-zinc-700/20">
          {items.map((item, index) => (
            <Link href={item.href} key={index} className="py-3 font-medium">
              {item.name}
            </Link>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  )
}
