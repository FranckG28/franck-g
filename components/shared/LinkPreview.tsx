import Link from 'next/link'

const cleanLinkRegex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i

export default function LinkPreview({
  href,
  title,
}: {
  href: string
  title: string
}) {
  const linkName = href.match(cleanLinkRegex)[1]

  return (
    <Link
      href={href}
      target="_blank"
      className="text-blue-300 hover:text-blue-200 transition flex items-center gap-2 tracking-tight"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>

      <p className="flex flex-col leading-none">
        {title && <span className="text-xs">{title}</span>}
        {<span className="font-medium">{linkName}</span>}
      </p>
    </Link>
  )
}
