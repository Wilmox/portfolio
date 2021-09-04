import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Footer from '../../components/Footer.js';
import Navigation from '../../components/Navigation';
import { Rating } from '@material-ui/core';
import Chip from '../../components/Chip.js';

import noteStyle from '../../styles/Notes.module.css';

import { getAllNotes } from '../../lib/data';

export default function Notes({ notes }) {
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
        <section className={noteStyle.noteSection}>
          <h1>Notes & Summaries</h1>
          <div className={noteStyle.notes}>

            {notes.map((note) => (
              <Link href={`/note/${note.slug}`}>
                <a key={note.slug} className={noteStyle.noteCard}>
                  <h2>{note.title}</h2>
                  <h3>{note.author}</h3>
                  <p>
                    {note.abstract}
                  </p>
                  <div className={noteStyle.aboutNote}>
                    <Rating className={noteStyle.rating} name="half-rating-read" defaultValue={note.rating} precision={0.5} readOnly />
                    <Chip className={noteStyle.noteChip} bgColor="#4361ee" text={"Physics"} icon={"\u{1F320}"} />
                  </div>
                </a>
              </Link>
            ))}

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const allNotes = getAllNotes();
  //const { content, data } = allNotes.find((note) => note.slug === params.slug)

  return {
    props: {
      //Here data serialising (dates, urls, ...),
      notes: allNotes.map(({data, content, slug}) => ({
        ...data,
        content,
        slug,
      })),
      
    },
  };
};