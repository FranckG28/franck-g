import { SpeedInsights } from '@vercel/speed-insights/next'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="bg-black text-white antialiased">
        <Main />
        <SpeedInsights />
        <NextScript />
      </body>
    </Html>
  )
}
