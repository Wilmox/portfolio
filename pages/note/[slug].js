import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';
import slugstyle from '../../styles/Slug.module.css';

import Footer from '../../components/Footer.js';
import Navigation from '../../components/Navigation'
import { Rating } from '@material-ui/core';

import { notes } from '../../lib/data';

export default function NotePage({title, author, date, abstract, readTime, rating, amazonLink, slug}) {
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
        <header className={slugstyle.header}>
          <h1 className={slugstyle.title}>{title}</h1>
          <h2 className={slugstyle.author}>{author}</h2>

          <hr className={styles.divider} />

          <div className={slugstyle.noteMeta}>
          <div className={slugstyle.metaItem}>
              <h4>Date</h4>
              <p>{date}</p>
            </div>
            <div className={slugstyle.metaItem}>
              <h4>Read Time</h4>
              <p>{readTime}</p>
            </div>
            <div className={slugstyle.metaItem}>
              <h4>Rating</h4>
              <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            </div>
            <div className={slugstyle.metaItem}>
              <h4>Link</h4>
              <Link href={amazonLink}><a target="_blank" rel="noopener noreferrer">Amazon</a></Link>
            </div>
          </div>

          <div>
          </div>
        </header>

        <section>
          <p className={slugstyle.abstract}>{abstract}</p>

          <p className={slugstyle.slug}>{slug}</p>
        </section>
        
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  return {
    props: notes.find((note) => note.slug === params.slug),
  };
};

export async function getStaticPaths() {
  return {
    paths: notes.map(note => ({
      params: {
        slug: note.slug
      }
    })),
    fallback:  false,
  };
}

//    https://mathiasbynens.github.io/rel-noopener/