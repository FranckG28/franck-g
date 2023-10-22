import { SocialLink } from 'lib/models/social-link'
import Link from 'next/link'

import DynamicIcon from './DynamicIcon'

export default function SocialLinks({
  socialLinks,
}: {
  socialLinks: SocialLink[]
}) {
  return (
    <div className="flex gap-4 flex-wrap">
      {socialLinks.map((socialLink, index) => {
        return (
          <Link
            href={socialLink.url}
            key={index}
            className="transition text-zinc-400 hover:text-blue-300"
            aria-label={socialLink.name}
            target="_blank"
          >
            <DynamicIcon icon={socialLink.icon} className="w-6 h-6" />
          </Link>
        )
      })}
    </div>
  )
}
