'use client'

import { MousePosition, useMeasure, useMouse } from '@uidotdev/usehooks'
import classNames from 'classnames'
import { set } from 'date-fns'
import { lerp } from 'lib/utils'
import { RefObject, useEffect } from 'react'

export default function LayoutAnimatedPattern() {
  const columns = 25
  const rows = 12

  const [measureRef, { width, height }] = useMeasure()
  const [mouse, ref] = useMouse() as [MousePosition, RefObject<HTMLDivElement>]

  const xIntersecting = mouse.elementX > 0 && mouse.elementX < width
  const yIntersecting = mouse.elementY > 0 && mouse.elementY < height
  const isIntersecting = xIntersecting && yIntersecting

  return (
    <div className="absolute inset-0 flex justify-center sm:px-8 -z-10">
      <div className="flex w-full max-w-7xl lg:px-8 relative">
        <div className="absolute inset-0 px-8 w-full h-96">
          <div
            ref={measureRef}
            className="w-full h-full z-10 [mask-image:linear-gradient(to_bottom,#18181b_25%,transparent)]"
            style={{
              background: `radial-gradient(circle 1000px at ${mouse.elementX}px ${mouse.elementY}px, #27272a 0%, #18181b 25%, transparent 100%)`,
            }}
          ></div>
        </div>
        <div
          ref={ref}
          className="w-full h-96 px-8 [mask-image:linear-gradient(to_bottom,#18181b_25%,transparent)]"
          style={{
            display: 'grid',
            gap: `${columns}px`,
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          }}
        >
          {Array.from({ length: columns * rows }).map((_, i) => {
            return (
              <Point
                key={i}
                active={isIntersecting}
                data-state="off"
                data-index={i}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Point({ active, shine }: { active?: boolean; shine?: boolean }) {
  const [mouse, ref] = useMouse() as [MousePosition, RefObject<HTMLDivElement>]

  let power = 0

  if (active) {
    const sensivity = 200

    const absoluteDistance = Math.sqrt(
      Math.pow(mouse.elementX, 2) + Math.pow(mouse.elementY, 2),
    )

    power = 1 - Math.max(0, absoluteDistance / sensivity)
  }

  return (
    <div
      ref={ref}
      className={classNames(
        'h-1 w-1 rounded-full bg-zinc-100 transition-colors',
      )}
      style={{
        opacity: active ? lerp(0.1, 0.5, power) : `0.1`,
        ...(active && {
          transform: `scale(${lerp(1, 1.25, power)})`,
        }),
      }}
    >
      {/* <span className="text-xs hidden">{opacity.toFixed(2)}</span> */}
    </div>
  )
}
