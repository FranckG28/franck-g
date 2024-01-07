/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react'
import classNames from 'classnames'

import styles from './PostBody.module.css'
import { SanityImage } from './SanityImage'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
}

export default function PostBody({ content, className }) {
  return (
    <div
      className={classNames(
        `max-w-2xl text-zinc-200`,
        styles.portableText,
        className,
      )}
    >
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
