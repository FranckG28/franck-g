'use client'

import { MousePosition, useMouse } from '@uidotdev/usehooks'
import classNames from 'classnames'
import { RefObject } from 'react'

const xOffset = 24
const yOffset = 24

export default function GlowingSurface({
  children,
  size = 800,
  className,
}: {
  children: React.ReactNode
  size?: number
  className?: string
}) {
  const [mouse, ref] = useMouse() as [MousePosition, RefObject<HTMLDivElement>]

  return (
    <div className="relative group" ref={ref}>
      <div
        className={classNames(
          'absolute -z-10 -inset-x-4 -inset-y-6 scale-95 bg-zinc-600/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 rounded-xl',
          className,
        )}
        style={{
          background: `radial-gradient(circle ${size}px at ${
            mouse.elementX + xOffset
          }px ${
            mouse.elementY + yOffset
          }px, rgba(63,63,70, 0.4) 0%, rgba(63,63,70, 0.2) 25%, rgba(63,63,70, 0.1) 100%)`,
        }}
      ></div>
      {children}
    </div>
  )
}
