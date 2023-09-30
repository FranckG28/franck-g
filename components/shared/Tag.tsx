import useWordColor from 'lib/hooks/useWordColor'
import { hslWithOpacity } from 'lib/utils'

export default function Tag({ tag }: { tag: string }) {
  const color = useWordColor(tag, 60, 60)

  return (
    <span
      style={{ backgroundColor: hslWithOpacity(color, 0.1), color: color }}
      className="inline-block rounded-lg px-3 py-1 text-sm brightness-90 hover:brightness-110 transition"
    >
      {tag}
    </span>
  )
}
