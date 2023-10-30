import { toPlainText } from '@portabletext/react'
import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import Head from 'next/head'

export interface IndexPageHeadProps {
  settings: Settings
  pageName?: string
}

export default function IndexPageHead({
  pageName,
  settings,
}: IndexPageHeadProps) {
  const {
    title = demo.title,
    description = demo.description,
    ogImage = {},
  } = settings
  const ogImageTitle = pageName || ogImage?.title || demo.ogImageTitle

  return (
    <Head>
      <title>{pageName ? `${pageName} | ${title}` : title}</title>
      <BlogMeta />
      <meta
        key="description"
        name="description"
        content={toPlainText(description)}
      />
      <meta
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/api/og?${new URLSearchParams({
          title: ogImageTitle,
          subtitle: ogImage?.subtitle || demo.ogImageSubtitle,
          siteName: ogImage?.siteName || demo.title,
        })}`}
      />
    </Head>
  )
}
