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
import { motion } from 'framer-motion';

import { getAllNotes } from '../../lib/data';

export default function NotePage({ title, author, date, abstract, readTime, rating, amazonLink, slug, content, labelColors, labelText, labelIcons, bookCover }) {

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }

  return (
    <div id="top" className={styles.container}>
      <Head>
      <title>{title + " by " + author + " | Notes & Summaries"} {"\u{1F4DD}"}</title>
        <meta name="keywords" content="portfolio, simon, wilmots, Simon, Wilmots, note"/>
        <meta name="description" content={title + " by " + author + " | Notes & Summaries"} />
        <meta name="subject" content="Simon Wilmots' Notes & Summaries" />
        <meta name="copyright"content="Simon Wilmots" />
        <meta name="language" content="en_GB" />
        <meta name="robots" content="index,follow" />
        <meta name="abstract" content={title + " by " + author + " | Notes & Summaries"} />
        <meta name="summary" content={title + " by " + author + " | Notes & Summaries"} />
        <meta name="Classification" content="Personal" />
        <meta name="author" content="Simon Wilmots" />
        <meta name="owner" content="Simon Wilmots"/>
        <meta name="url" content={"simonwilmots.com/note/" + slug}/>
        <meta name="rating" content="General" />

        <meta name="og:title" content={title + " by " + author + " | Notes & Summaries"}/>
        <link rel="canonical" href={"simonwilmots.com/note/" + slug} />
        <meta property="og:locale" content="en_GB" />
        <meta name="og:type" content="website"/>
        <meta name="og:url" content={"simonwilmots.com/note/" + slug}/>
        <meta name="og:image" content="/assets/img/favicon.ico" />
        <meta name="og:description" content={title + " by " + author + " | Notes & Summaries"}/>
        <meta name="og:site_name" content={title + " by " + author + " | Notes & Summaries"}/>

        <meta httpEquiv="X-UA-Compatible" content="chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="yes" name="apple-touch-fullscreen" />

        <link rel="icon" href="/assets/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/img/favicon.ico" />
        <link rel="shortcut icon" href="/assets/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet" />
      </Head>

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
        <header className={slugStyle.header}>
          <h1 className={slugStyle.title}>{title}</h1>
          <h2 className={slugStyle.author}>{author}</h2>

          <div className={slugStyle.labels}>
            {labelText.map((label, i) => <Chip key={labelText[i]} className={slugStyle.noteChip} text={labelText[i]} icon={labelIcons[i]} />)}
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
          <p className={slugStyle.abstract}>{abstract}</p>

          {/* Image test  */}
          {bookCover ? (
            <div className={slugStyle.cover}>
                <div className={slugStyle.book}>
                  <div className={slugStyle.inner_book}>
                    <div className={slugStyle.img} style={{paddingTop: "calc(1.07 * 100%)"}}>
                      <Image src={bookCover} width={135} height={210} />
                    </div>
                    <div className={slugStyle.page}></div>
                    <div className={[slugStyle.page, slugStyle.page_2].join(" ")}></div>
                    <div className={[slugStyle.page, slugStyle.page_3].join(" ")}></div>
                    <div className={[slugStyle.page, slugStyle.page_4].join(" ")}></div>
                    <div className={[slugStyle.page, slugStyle.page_5].join(" ")}></div>
                    <div className={[slugStyle.img, slugStyle.final_page].join(" ")} style={{paddingTop: "calc(1.07 * 100%)"}}>
                      <Image src={bookCover} width={135} height={210} />
                    </div>
                  </div>
              </div>
            </div>
          ) : (console.log("No cover image found"))

          }

          <div className={slugStyle.articleContent}>
            <MDXRemote {...content} />
          </div>
          <p className={slugStyle.slug}>{"simonwilmots.com/note/" + slug}</p>
        </article>

      </motion.main>
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