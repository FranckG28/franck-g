import { Author } from 'lib/sanity.queries'

import AuthorAvatar from './AuthorAvatar'
import SectionHeader from './SectionHeader'

export default function AuthorsList({
  title,
  authors,
}: {
  title: string
  authors: Author[]
}) {
  return (
    <>
      {authors && authors?.length > 0 && (
        <>
          <SectionHeader title={title}></SectionHeader>
          <div className="flex flex-col gap-2">
            {authors?.map((author, index) => (
              <AuthorAvatar
                key={index}
                name={author.name}
                picture={author.picture}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}
