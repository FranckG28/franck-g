import classNames from 'classnames'
import { Link } from 'schemas/link'

import LinkPreview from './LinkPreview'

export default function LinkPreviewList({
  links,
  className,
}: {
  links: Link[]
  className?: string
}) {
  return (
    <>
      {links && links?.length > 0 && (
        <div
          className={classNames(
            'flex flex-row gap-8 mt-3 flex-wrap',
            className,
          )}
        >
          {links?.map((link, index) => (
            <LinkPreview key={index} href={link.url} title={link.title} />
          ))}
        </div>
      )}
    </>
  )
}
