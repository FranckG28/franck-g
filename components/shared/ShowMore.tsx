import Link from 'next/link'

export default function ShowMore({
  href,
  text = 'Show more',
}: {
  href: string
  text?: string
}) {
  return (
    <Link
      href={href}
      className="text-blue-300 hover:text-blue-200 text-sm transition-all flex items-center gap-2 hover:gap-2.5"
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </Link>
  )
}
