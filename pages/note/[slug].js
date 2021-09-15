import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import styles from '../../styles/Home.module.css';
import slugStyle from '../../styles/Slug.module.css';

import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation'
import Chip from '../../components/Chip/Chip'
import { Rating } from '@material-ui/core';

import { getAllNotes } from '../../lib/data';

export default function NotePage({ title, author, date, abstract, readTime, rating, amazonLink, slug, content, labelColors, labelText, labelIcons, bookCover }) {
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
        <header className={slugStyle.header}>
          <h1 className={slugStyle.title}>{title}</h1>
          <h2 className={slugStyle.author}>{author}</h2>

          <div className={slugStyle.labels}>
            {labelText.map((label, i) => <Chip key={labelText[i]} className={slugStyle.noteChip} bgColor={labelColors[i]} text={labelText[i]} icon={labelIcons[i]} />)}
          </div>

          <hr className={styles.divider} />

          <div className={slugStyle.noteMeta}>
            <div className={slugStyle.metaItem}>
              <h4>Date</h4>
              <p>{date}</p>
            </div>
            <div className={slugStyle.metaItem}>
              <h4>Read time</h4>
              <p>{readTime}</p>
            </div>
            <div className={slugStyle.metaItem}>
              <h4>Rating</h4>
              <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            </div>
            <div className={slugStyle.metaItem}>
              <h4>Link</h4>
              <div>
                <Link href={amazonLink}><a target="_blank" rel="noopener noreferrer">Amazon</a></Link>
                <Link href={amazonLink}><a target="_blank" rel="noopener noreferrer" className={slugStyle.arrowLink}> &#x2197;</a></Link>
              </div>
            </div>
          </div>

          <div>
          </div>
        </header>

        <article className={slugStyle.noteArticle}>

          {/*<Image className={slugStyle.bookCover} src={bookCover} width={135} height={210} />  */}
          
          <p className={slugStyle.abstract}>{abstract}</p>          
          <div className={slugStyle.articleContent}>
            <MDXRemote {...content} />
          </div>

          <p className={slugStyle.slug}>{"simonwilmots.be/note/" + slug}</p>
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