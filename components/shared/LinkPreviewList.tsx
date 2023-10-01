import LinkPreview from './LinkPreview'

export default function LinkPreviewList({ links }: { links: string[] }) {
  return (
    <>
      {links && links?.length > 0 && (
        <div className="flex flex-row gap-2 mt-3 flex-wrap">
          {links?.map((link, index) => <LinkPreview key={index} href={link} />)}
        </div>
      )}
    </>
  )
}
