import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        {/* <div className="container mx-auto max-w-screen-xl bg-stone-800 border-l border-r border-stone-700"> */}
        <Main />
        {/* </div> */}
        <NextScript />
      </body>
    </Html>
  )
}
