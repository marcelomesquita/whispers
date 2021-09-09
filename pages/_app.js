import Head from 'next/head'
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { analytics } from '../adapters/firebaseClient';

import '../assets/styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  const routers = useRouter();

  useEffect(() => {
		if (process.env.NEXT_PUBLIC_ENV === 'production') {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view');
      };

      routers.events.on('routeChangeComplete', logEvent);

      logEvent(window.location.pathname);

      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
		}
	}, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Fernanda Essenciais" />
        <meta name="description" content="Consultora bem estar doTerra. Soluções naturais para seu bem estar ajudando a melhorar sua saúde física e emocional." />

        <title>Whispers</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
