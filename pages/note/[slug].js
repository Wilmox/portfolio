import Head from 'next/head';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import styles from '../../styles/Home.module.css';
import notestyle from '../../styles/Slug.module.css';

import Footer from '../../components/Footer.js';
import Navigation from '../../components/Navigation'
import { Rating } from '@material-ui/core';

import { getAllNotes } from '../../lib/data';

export default function NotePage({ title, author, date, abstract, readTime, rating, amazonLink, slug, content }) {
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
        {//<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tailwindcss/typography@0.4.x/dist/typography.min.css"/>
        }
      </Head>

      <main className={styles.main}>
        <section>
          <Navigation />
        </section>
        <header className={notestyle.header}>
          <h1 className={notestyle.title}>{title}</h1>
          <h2 className={notestyle.author}>{author}</h2>

          <hr className={styles.divider} />

          <div className={notestyle.noteMeta}>
            <div className={notestyle.metaItem}>
              <h4>Date</h4>
              <p>{date}</p>
            </div>
            <div className={notestyle.metaItem}>
              <h4>Read Time</h4>
              <p>{readTime}</p>
            </div>
            <div className={notestyle.metaItem}>
              <h4>Rating</h4>
              <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            </div>
            <div className={notestyle.metaItem}>
              <h4>Link</h4>
              <Link href={amazonLink}><a target="_blank" rel="noopener noreferrer">Amazon</a></Link>
            </div>
          </div>

          <div>
          </div>
        </header>

        <article className={notestyle.noteArticle}>
          <p className={notestyle.abstract}>{abstract}</p>

          <div class="prose" className={notestyle.articleContent}>
            <MDXRemote {...content} />
          </div>

          <p className={notestyle.slug}>{"simonwilmots.be/note/" + slug}</p>
        </article>

      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const allNotes = getAllNotes();
  const { content, data } = allNotes.find((note) => note.slug === params.slug);

  const mdxSource = await serialize(content)


  return {
    props: {
      //Here data serialising (dates, urls, ...),
      ...data,
      content: mdxSource,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: getAllNotes().map(note => ({
      params: {
        slug: note.slug
      }
    })),
    fallback: false,
  };
}