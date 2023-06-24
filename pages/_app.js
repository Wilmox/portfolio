import Head from 'next/head'
import '../styles/globals.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta content="yes" name="apple-touch-fullscreen" />
        </Head>
        <Component {...pageProps} />
      </>
    )
}

export default MyApp
