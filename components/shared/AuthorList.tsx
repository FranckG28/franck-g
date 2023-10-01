import { Author } from 'lib/sanity.queries'

import AuthorAvatar from './AuthorAvatar'

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
          <p>{title}</p>
          <div className="flex flex-row gap-2 mt-3 flex-wrap">
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
