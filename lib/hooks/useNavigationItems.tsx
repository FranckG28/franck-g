import { Navigation } from 'lib/models/navigation'

import { Settings } from '../sanity.queries'

export default function useNavigationItems(settings: Settings): Navigation[] {
  return [
    {
      name: settings.projects.title ?? 'Projects',
      href: '/projects',
    },
    {
      name: settings.experiences.title ?? 'Experiences',
      href: '/experiences',
    },
  ]
}
