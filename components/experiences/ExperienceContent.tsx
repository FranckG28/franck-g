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
import { SanityImage } from 'components/shared/SanityImage'

import styles from './ExperienceContent.module.css'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
}

export default function ExperienceContent({ content }) {
  return (
    <div className={`max-w-2xl text-zinc-400 ${styles.portableText}`}>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
