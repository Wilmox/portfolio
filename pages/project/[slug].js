import Head from 'next/head';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import styles from '../../styles/Home.module.css';
import slugStyle from '../../styles/Slug.module.css';

import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation'
import Chip from '../../components/Chip/Chip'
import ScrollProgress from '../../components/ScrollProgress/ScrollProgress';
import BackToTop from '../../components/BackToTop/BackToTop';
import TableOfContents from '../../components/TableOfContent/TableOfContent';

import { getAllProjects } from '../../lib/data';
import { motion } from 'framer-motion';

export default function ProjectPage({ title, type, description, duration, headerImg, slug, labelText, labelIcons, teamSize, content}) {
    
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }
  
  return (
    <div id="top" className={styles.container}>
      <Head>
      <title>{title + " | Projects & Work"}</title>
        <meta name="keywords" content="portfolio, simon, wilmots, Simon, Wilmots, project"/>
        <meta name="description" content={title + " | Projects & Work"} />
        <meta name="subject" content="Simon Wilmots' Projects & Work" />
        <meta name="copyright"content="Simon Wilmots" />
        <meta name="language" content="en_GB" />
        <meta name="robots" content="index,follow" />
        <meta name="abstract" content={description} />
        <meta name="summary" content={description} />
        <meta name="Classification" content="Personal" />
        <meta name="author" content="Simon Wilmots" />
        <meta name="owner" content="Simon Wilmots" />
        <meta name="url" content={"simonwilmots.com/project/" + slug}/>
        <meta name="rating" content="General" />

        <meta name="og:title" content={title + " | Projects & Work"} />
        <meta property="og:locale" content="en_GB" />
        <meta name="og:url" content={"simonwilmots.com/project/" + slug}/>
        <meta name="og:description" content={description}/>
        <meta name="og:site_name" content={"simonwilmots.com/project/" + slug}/>
        <meta name="og:image" content={headerImg} />
        <meta name="og:type" content="website"/>

        <link rel="canonical" href={"simonwilmots.com/project/" + slug} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="yes" name="apple-touch-fullscreen" />

        <link rel="icon" href="/assets/img/ico.ico" />
        <link rel="apple-touch-icon" href="/assets/img/ico.ico" />
        <link rel="shortcut icon" href="/assets/img/ico.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet" />
      </Head>

      <ScrollProgress />
      
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
          <h2 className={slugStyle.author}>{type}</h2>

          <div className={slugStyle.labels}>
            {labelText.map((label, i) => <Chip key={labelText[i]} className={slugStyle.noteChip} text={labelText[i]} icon={labelIcons[i]} />)}
          </div>
          <hr className={styles.divider} />

          <div className={slugStyle.noteMeta}>
            <div className={slugStyle.metaItem}>
              <h4>Duration</h4>
              <p>{duration}</p>
            </div>
            <div className={slugStyle.metaItem}>
              <h4>Team size</h4>
              <p>{teamSize}</p>
            </div>
          </div>

          <div>
          </div>
        </header>
        <BackToTop />

        <article className={slugStyle.noteArticle}>
          <p className={slugStyle.abstract}>{description}</p>

          {title.includes('i-Talent') &&     
          <TableOfContents />
          }

          <div id="content" className={slugStyle.articleContent}>
            <MDXRemote {...content} />
          </div>

          <p className={slugStyle.slug}>{"simonwilmots.com/project/" + slug}</p>
        </article>

      </motion.main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const allProjects = getAllProjects();
  const { content, data } = allProjects.find((project) => project.slug === params.slug);

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
    paths: getAllProjects().map(project => ({
      params: {
        slug: project.slug
      }
    })),
    fallback: false,
  };
}