import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import { Rating } from '@material-ui/core';
import Chip from '../../components/Chip/Chip';

import noteStyle from '../../styles/Notes.module.css';

import { getAllNotes } from '../../lib/data';
import Search from '../../components/Search/Search';

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
          <header>
            <h1>Notes & Summaries</h1>
            <p>These are notes I&apos;ve taken or summaries I&apos;ve made of the things I read or listen to. Parts may come straight from the source, while others are written by me. <br />
            I do this to get the author&apos;s high-level idea or to brush up on something for later, or for people who don&apos;t feel like reading / listening to a whole book.</p>
          </header>
          
          {/*<Search />*/}

          <div className={noteStyle.notes}>
            {notes.map((note) => (
              <Link key={note.slug} href={`/note/${note.slug}`}>
                <a key={note.slug} className={noteStyle.noteCard}>
                  <h2 key="title">{note.title}</h2>
                  <h3 key="author">{note.author}</h3>
                  <p key="abstract">
                    {note.abstract}
                  </p>
                  <div className={noteStyle.aboutNote}>
                    <Rating key="rating" className={noteStyle.rating} name="half-rating-read" defaultValue={note.rating} precision={0.5} readOnly />
                    <Chip key="label" className={noteStyle.noteChip} bgColor={note.labelColors[0]} text={note.labelText[0]} icon={note.labelIcons[0]} />
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

export async function getStaticProps() {
  const allNotes = getAllNotes();
  let searchNotes = allNotes;

   /*const searchTerm = context.query.search ?? "";
  if (searchTerm != null) {
    searchNotes =  searchNotes.filter((note) => {
      //Searches in title, author & abstract data field for a match with the query
      return note.data.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.data.author.toLowerCase().includes(searchTerm.toLowerCase()) || note.data.abstract.toLowerCase().includes(searchTerm.toLowerCase())
    });
  }*/

  return {
    props: {
      //Here data serialising (dates, urls, ...),
      notes: searchNotes.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),

    },
  };
};