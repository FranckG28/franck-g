import classNames from 'classnames'
import { SocialLink } from 'lib/models/social-link'
import Link from 'next/link'

import DynamicIcon from './DynamicIcon'
import Tooltip from './Tooltip'

export default function SocialLinks({
  socialLinks,
  className,
}: {
  socialLinks: SocialLink[]
  className?: string
}) {
  return (
    <div className={classNames('flex gap-6 flex-wrap', className)}>
      {socialLinks.map((socialLink, index) => {
        return (
          <Tooltip key={index} content={socialLink.name} side="bottom">
            <Link
              href={socialLink.url}
              className="transition text-zinc-400 hover:text-blue-300"
              aria-label={socialLink.name}
              target="_blank"
            >
              <DynamicIcon icon={socialLink.icon} className="w-5 h-5" />
            </Link>
          </Tooltip>
        )
      })}
    </div>
  )
}
