import { Navigation } from 'lib/models/navigation'

import { Settings } from '../sanity.queries'

export default function useNavigationItems(settings: Settings): Navigation[] {
  return [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: settings.projects?.name ?? 'Projects',
      href: '/projects',
    },
    {
      name: settings.experiences?.name ?? 'Experiences',
      href: '/experiences',
    },
    {
      name: settings.videos?.name ?? 'Videos',
      href: '/videos',
    },
  ]
}
