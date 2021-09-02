import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Footer from '../../components/Footer.js';
import Navigation from '../../components/Navigation';

export default function Notes() {
  return (
    <div id="top" className={styles.container}>
      <Head>
        <title>Simon Wilmots {"\u{1F680}"}</title>
        <meta name="description" content="SIMONWILMOTS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <section>
          <Navigation />
        </section>
      </main>
      <Footer />
    </div>
  )
}

//    https://mathiasbynens.github.io/rel-noopener/