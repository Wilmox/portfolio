import Head from 'next/head'
import Navigation from '../components/Navigation.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation hideHomeButton/>
        <section className={styles.about}>
          <h1 className={styles.title}>
              Simon <br/> Wilmots
          </h1>
        </section>
        

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        
      </main>
    </div>
  )
}
