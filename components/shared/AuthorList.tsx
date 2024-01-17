import { Author } from 'schemas/author'

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
          <div className="flex flex-col gap-8">
            {authors?.map((author, index) => (
              <AuthorAvatar
                key={index}
                name={author.name}
                picture={author.picture}
                link={author.link}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}
