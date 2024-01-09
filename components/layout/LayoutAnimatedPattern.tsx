'use client'

import { MousePosition, useMeasure, useMouse } from '@uidotdev/usehooks'
import { getRandomNumber, getRandomNumbers } from 'lib/utils'
import { RefObject, useCallback, useEffect, useMemo } from 'react'

export default function LayoutAnimatedPattern() {
  const columns = 25
  const rows = 12

  const [measureRef, { width, height }] = useMeasure()
  const [mouse, ref] = useMouse() as [MousePosition, RefObject<HTMLDivElement>]

  const xIntersecting = mouse.elementX > 0 && mouse.elementX < width
  const yIntersecting = mouse.elementY > 0 && mouse.elementY < height
  const isIntersecting = xIntersecting && yIntersecting

  const pointsToAnimate = 50

  // Custom points to light up on hover
  const selectedPoints = useMemo(
    () => [
      78, 80, 82, 83, 84, 86, 90, 94, 95, 96, 103, 105, 107, 111, 115, 119, 121,
      128, 129, 130, 132, 133, 134, 136, 140, 144, 146, 153, 155, 157, 161, 165,
      169, 171, 178, 180, 182, 183, 184, 186, 187, 188, 190, 191, 192, 194, 195,
      196,
    ],
    [],
  )

  // Random points for the idle animation
  const indices = useMemo(
    () => getRandomNumbers(0, columns * rows - 1, pointsToAnimate),
    [columns, rows],
  )

  useEffect(() => {
    const states = ['off', 'medium', 'high']
    const timeoutIds = []

    const interval = setInterval(() => {
      if (isIntersecting) {
        timeoutIds.forEach(clearTimeout)
        return
      }

      indices.forEach((index) => {
        const light = ref.current.querySelector(`[data-index="${index}"]`)

        if (!light) {
          return
        }

        // Pick a random next state
        const nextState = states[Math.floor(Math.random() * states.length)]
        const currentState = light.getAttribute('data-state')

        const pulse =
          Math.random() > 0.2 &&
          // Make sure we only pulsate going from "off" → "medium" → "high"
          ((currentState === 'off' && nextState === 'high') ||
            (currentState === 'off' && nextState === 'medium') ||
            (currentState === 'medium' && nextState === 'high'))

        if (pulse) {
          // Add an arbitrary delay between 100-500ms
          const delay = getRandomNumber(100, 500)

          timeoutIds.push(
            setTimeout(() => {
              light.setAttribute('data-pulse', 'true')
            }, delay),
          )

          timeoutIds.push(
            setTimeout(() => {
              light.setAttribute('data-pulse', 'false')
            }, 500 + delay),
          )
        }

        // After a pulse, don't transition from "high" → "medium"
        if (currentState === 'high' && nextState === 'medium' && pulse) {
          light.setAttribute('data-state', 'off')
        } else {
          light.setAttribute('data-state', nextState)
        }
      })
    }, 1000)

    return () => {
      clearInterval(interval)
      timeoutIds.forEach(clearTimeout)
    }
  }, [indices, isIntersecting, ref])

  const setLightState = useCallback(
    (indexes: number[], state: string, pulse: boolean) => {
      indexes.forEach((index) => {
        const light = ref.current.querySelector(`[data-index="${index}"]`)

        if (!light) {
          return
        }

        light.setAttribute('data-state', state)
        light.setAttribute('data-pulse', pulse ? 'true' : 'false')
      })
    },
    [ref],
  )

  useEffect(() => {
    if (isIntersecting) {
      // Turn off all lights
      setLightState(indices, 'off', false)

      // Turn on selected lights
      setLightState(selectedPoints, 'high', false)
    } else {
      // Turn off selected lights
      setLightState(selectedPoints, 'off', false)
    }
  }, [indices, isIntersecting, selectedPoints, setLightState])

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
            return <Point index={i} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}

function Point({ index }: { index: number }) {
  return (
    <div
      data-index={index}
      data-state="off"
      className={`
        h-1 w-1 rounded-full transition-all duration-500 
        data-[state=off]:bg-zinc-100 data-[state=off]:opacity-10
        data-[state=medium]:opacity-70 data-[state=medium]:blur-[1px] data-[state=medium]:bg-blue-300
        data-[state=high]:opacity-70 data-[state=high]:scale-150 data-[state=high]:bg-blue-200
        data-[pulse=true]:scale-[2] data-[pulse=true]:blur-[1px]
      `}
    >
      {/* <span className="text-xs">{index}</span> */}
    </div>
  )
}
