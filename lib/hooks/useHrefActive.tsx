import { useRouter } from 'next/router'
import { useCallback } from 'react'

export default function useHrefActive() {
  const router = useRouter()

  const isActive = useCallback(
    (href: string) => {
      if (href === '/') return router.pathname === '/'
      return router.pathname.startsWith(href)
    },
    [router],
  )

  return isActive
}
