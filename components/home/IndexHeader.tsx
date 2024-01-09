import classNames from 'classnames'
import SocialLinks from 'components/shared/SocialLinks'
import { urlForImage } from 'lib/sanity.image'
import { Settings } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

import IndexGradient from './IndexGradient'

export default function IndexHeader({
  settings,
  level,
}: {
  settings: Settings
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <section className="relative flex flex-col gap-4 items-start animate-fade-up">
          {settings.logo && (
            <WebsiteLogo
              logo={settings.logo}
              title={settings.title}
              size={80}
            />
          )}

          <IndexGradient />

          <h1 className="mt-2">{settings.title}</h1>

          {settings.location && (
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
              {settings.location}
            </h4>
          )}

          {settings?.socialLinks?.length > 0 && (
            <SocialLinks socialLinks={settings.socialLinks} className="mt-4" />
          )}
        </section>
      )

    case 2:
      return (
        <div className="p-0.5 rounded-full h-fit w-fit bg-zinc-800/20 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur">
          <Link href={'/'}>
            <WebsiteLogo
              logo={settings.logo}
              title={settings.title}
              size={40}
            />
          </Link>
        </div>
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
  className,
}: {
  logo: any
  title: string
  size: number
  className?: string
}) {
  return (
    <Image
      className={classNames(
        'h-fit rounded-full aspect-square transition hover:scale-105',
        className,
      )}
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
