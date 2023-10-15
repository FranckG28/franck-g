import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

export default function IndexHeader({
  title,
  location,
  level,
  logo,
}: {
  title: string
  location?: string
  level: 1 | 2
  logo: any
}) {
  switch (level) {
    case 1:
      return (
        <section className="flex flex-col gap-6 items-start">
          {logo && <WebsiteLogo logo={logo} title={title} size={100} />}
          <h1>{title}</h1>

          <h4
            className={`flex gap-2 items-center text-zinc-400 text-lg md:text-left`}
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {location}
          </h4>
        </section>
      )

    case 2:
      return (
        <Link href={'/'}>
          <WebsiteLogo logo={logo} title={title} size={45} />
        </Link>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}

function WebsiteLogo({
  logo,
  title,
  size,
}: {
  logo: any
  title: string
  size: number
}) {
  return (
    <Image
      className="
    h-fit rounded-full aspect-square shadow
    transition hover:scale-105
  "
      width={size}
      height={size}
      alt={title}
      src={urlForImage(logo)
        .height(size * 2)
        .width(size * 2)
        .url()}
      sizes={size * 2 + 'px'}
    />
  )
}
