import { PortableText } from '@portabletext/react'
import classNames from 'classnames'
import PostBody from 'components/shared/PostBody'
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
        <section className="relative flex flex-col gap-6 items-start animate-fade-up">
          {settings.logo && (
            <WebsiteLogo
              logo={settings.logo}
              title={settings.title}
              size={80}
            />
          )}

          <IndexGradient />

          <div>
            <h1>{settings.title}</h1>

            {settings.description && (
              <PostBody
                content={settings.description}
                className="text-zinc-400 text-balance max-w-prose"
              ></PostBody>
            )}

            {settings.location && (
              <h5
                className={`flex gap-2 items-center text-zinc-400 max-w-prose md:text-left`}
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
              </h5>
            )}
          </div>

          {settings?.socialLinks?.length > 0 && (
            <SocialLinks socialLinks={settings.socialLinks} className="mt-2" />
          )}
        </section>
      )

    case 2:
      return (
        <div className="p-0.5 rounded-full h-fit w-fit bg-zinc-800/50 shadow-lg shadow-zinc-900/10 ring-1 ring-white/10 backdrop-blur">
          <Link href={'/'}>
            <WebsiteLogo
              logo={settings.logo}
              title={settings.title}
              size={48}
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
