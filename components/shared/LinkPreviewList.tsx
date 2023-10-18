import classNames from 'classnames'

import LinkPreview from './LinkPreview'

export default function LinkPreviewList({
  links,
  className,
}: {
  links: string[]
  className?: string
}) {
  return (
    <>
      {links && links?.length > 0 && (
        <div
          className={classNames(
            'flex flex-row gap-2 mt-3 flex-wrap',
            className,
          )}
        >
          {links?.map((link, index) => <LinkPreview key={index} href={link} />)}
        </div>
      )}
    </>
  )
}
