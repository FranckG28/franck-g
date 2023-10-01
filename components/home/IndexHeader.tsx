import { PortableText } from '@portabletext/react'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

import styles from './IndexHeader.module.css'

export default function IndexHeader({
  title,
  location,
  level,
  logo,
}: {
  title: string
  location: string
  level: 1 | 2
  logo: any
}) {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col gap-2 items-start md:mb-12">
          {logo && (
            <Image
              className="
                h-fit rounded-full aspect-square shadow-lg border border-zinc-200/20
                transition ease-in-out hover:scale-105 duration-500
              "
              width={120}
              height={120}
              alt={`Portfolio logo`}
              src={urlForImage(logo).height(300).width(300).url()}
              sizes="200px"
            />
          )}
          <h1>{title}</h1>

          <div className="flex gap-2 items-center  text-zinc-200">
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
            <h4 className={`text-lg md:text-left ${styles.portableText}`}>
              {location}
            </h4>
          </div>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
