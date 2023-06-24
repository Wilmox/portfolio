import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import { Rating } from '@mui/material';
import Chip from '../../components/Chip/Chip';
import ScrollProgress from '../../components/ScrollProgress/ScrollProgress';
import BackToTop from '../../components/BackToTop/BackToTop';
import { useEffect } from 'react';

import noteStyle from '../../styles/Notes.module.css';

import { getAllNotes } from '../../lib/data';
import Search from '../../components/Search/Search';
import { motion } from 'framer-motion';

export default function Notes({ notes }) {
    
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }

  /* UNCOMMENT TO VIEW PROPS PASSED TO PAGE
  useEffect(() => {
    console.log(document.getElementById("__NEXT_DATA__").text)
  })
  */
  
  return (
    <div id="top" className={styles.container}>
      <Head>
        <title>Notes & Summaries {"\u{1F4DD}"}</title>
        <meta name="keywords" content="portfolio, simon, wilmots, Simon, Wilmots, notes, summaries" />
        <meta name="description" content="Simon Wilmots' Notes & Summaries" />
        <meta name="subject" content="Simon Wilmots' Notes & Summaries" />
        <meta name="copyright"content="Simon Wilmots" />
        <meta name="language" content="en_GB" />
        <meta name="robots" content="index,follow" />
        <meta name="abstract" content="Simon Wilmots' Notes & Summaries" />
        <meta name="summary" content="Simon Wilmots' Notes & Summaries" />
        <meta name="Classification" content="Personal" />
        <meta name="author" content="Simon Wilmots" />
        <meta name="owner" content="Simon Wilmots"/>
        <meta name="url" content="http://www.simonwilmots.com/notes"/>
        <meta name="rating" content="General" />

        <meta name="og:title" content="Notes & Summaries 📝"/>
        <link rel="canonical" href="https://simonwilmots.com/notes" />
        <meta property="og:locale" content="en_GB" />
        <meta name="og:type" content="website"/>
        <meta name="og:url" content="http://simonwilmots.com/notes"/>
        <meta name="og:image" content="/assets/img/ico.ico" />
        <meta name="og:description" content="Simon Wilmots' Notes & Summaries"/>
        <meta name="og:site_name" content="http://simonwilmots.com/notes"/>

      </Head>

      <ScrollProgress />
      <BackToTop />

      <motion.main
        className={styles.main}
        variants={variants} // Pass the variant object into Framer Motion 
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'linear' }} // Set the transition to linear
      >
        <section>
          <Navigation />
        </section>
        <section className={noteStyle.noteSection}>
          <header>
            <h1>Notes & Summaries</h1>
            <p>These are notes I&apos;ve taken, or summaries I&apos;ve made of the things I read or listen to. Parts may come straight from the source, while others are written by me. <br />
            I do this to get the author&apos;s high-level idea, to brush up on something, or for people who don&apos;t feel like reading / listening to a whole book.</p>
          </header>
          
          <Search />

          {/*{notes.map((note) => (
              <Link key={note.slug} href={`/note/${note.slug}`}>
                    <Chip key="label" className={noteStyle.noteChip} text={note.labelText[0]} icon={note.labelIcons[0]} /> 
              </Link>
          ))}*/}


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
                    <Chip key="label" className={noteStyle.noteChip} text={note.labelText[0]} icon={note.labelIcons[0]} />
                  </div>
                </a>
              </Link>
            ))}

          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const allNotes = getAllNotes();
  let searchNotes = allNotes;

  const searchTerm = context.query.search ?? "";
  const chipFilter = context.query.filter ?? "";
  if (searchTerm != null) {
    searchNotes =  searchNotes.filter((note) => {
      //Searches in title, author & abstract data field for a match with the query
      return note.data.labelText.some(label => label.includes(chipFilter)) && (note.data.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.data.author.toLowerCase().includes(searchTerm.toLowerCase()) || note.data.abstract.toLowerCase().includes(searchTerm.toLowerCase()))
    });
  }
  
  searchNotes.sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    //return dateA - dateB; // Ascending
    return dateB - dateA;   // Descending
  });

  return {
    props: {
      //Here data serialising (dates, urls, ...),
      notes: searchNotes.map(({ data, /*content,*/ slug }) => ({
        ...data,
        // content,
        slug,
      })),

    },
  };
};