import { ImageResponse } from '@vercel/og'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import type { NextRequest, NextResponse } from 'next/server'
import type { PageConfig } from 'next/types'
import { createClient } from 'next-sanity'

export const config: PageConfig = { runtime: 'edge' }

import { height, OpenGraphImage, width } from 'components/OpenGraphImage'
import * as demo from 'lib/demo.data'
import { Settings, settingsQuery } from 'lib/sanity.queries'

export default async function og(req: NextRequest, res: NextResponse) {
  const font = fetch(new URL('public/Inter-Bold.woff', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  )
  const { searchParams } = new URL(req.url)

  let title = searchParams.get('title')
  let subtitle = searchParams.get('subtitle')
  let siteName = searchParams.get('siteName')
  if (!title) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    })
    const settings = (await client.fetch<Settings>(settingsQuery)) || {}
    title = settings?.ogImage?.title
    subtitle = settings?.ogImage?.subtitle
    siteName = settings?.title
  }

  return new ImageResponse(
    (
      <OpenGraphImage
        title={title || demo.ogImageTitle}
        subtitle={subtitle || demo.ogImageSubtitle}
        siteName={siteName || demo.title}
      />
    ),
    {
      width,
      height,
      fonts: [
        {
          name: 'Inter',
          data: await font,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  )
}
