import Head from 'next/head'

import '../assets/styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Marcelo Mesquita" />
        <meta name="description" content="" />

        <title>Whispers</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
