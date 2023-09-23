export default function Tag({ tag }: { tag: string }) {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
      {tag}
    </span>
  )
}
