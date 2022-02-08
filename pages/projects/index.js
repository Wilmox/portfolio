import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation/Navigation';
import styles from '../../styles/Projects.module.css';
import Footer from '../../components/Footer/Footer.js';
import Chip from '../../components/Chip/Chip.js';
import ScrollProgress from '../../components/ScrollProgress/ScrollProgress';
import BackToTop from '../../components/BackToTop/BackToTop';

import { motion } from 'framer-motion';

import { getAllProjects } from '../../lib/data';

export default function Projects({ projects }) {

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }

  return (
    <div id="top" className={styles.container}>
      <Head>
        <title>Projects & Work {"\u{1F6A7}"}</title>
        <meta name="keywords" content="portfolio, simon, wilmots, Simon, Wilmots, projects, work" />
        <meta name="description" content="Simon Wilmots' Projects" />
        <meta name="subject" content="Simon Wilmots' Projects" />
        <meta name="copyright" content="Simon Wilmots" />
        <meta name="language" content="en_GB" />
        <meta name="robots" content="index,follow" />
        <meta name="abstract" content="Simon Wilmots' Projects" />
        <meta name="summary" content="Simon Wilmots' Projects" />
        <meta name="Classification" content="Personal" />
        <meta name="author" content="Simon Wilmots" />
        <meta name="owner" content="Simon Wilmots" />
        <meta name="url" content="http://www.simonwilmots.com/projects" />
        <meta name="rating" content="General" />

        <meta name="og:title" content="Projects & Work 🚧" />
        <link rel="canonical" href="https://simonwilmots.com/projects" />
        <meta property="og:locale" content="en_GB" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="http://simonwilmots.com/projects" />
        <meta name="og:image" content="/assets/img/ico.ico" />
        <meta name="og:description" content="Simon Wilmots' Projects" />
        <meta name="og:site_name" content="https://www.simonwilmots.com/projects" />

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
        <section className={styles.projectSection}>

          <header>
            <h1>Projects_:</h1>
            <p>Projects I worked on or participated with. These can be side project where I worked on in my free time or things I made for a company as an employee or intern.</p>
          </header>

          <div className={styles.projects}>

            {projects.map(project => {
              if (!project.title.includes('i-Talent')) {
                return (
                  <Link key={project.slug} href={`/project/${project.slug}`}>
                    <a key={project.slug} className={styles.projectCard}>
                      <Image src={project.headerImg} width={1241} height={745} />

                      <div className={styles.cardText}>
                        <h2>{project.title}</h2>
                        <h3>{project.type}</h3>
                        <p>{project.description}</p>
                      </div>
                      <div className={styles.labels}>
                        {project.labelText.map((label, i) => <Chip key={project.labelText[i]} /*className={notestyle.noteChip}*/ text={project.labelText[i]} icon={project.labelIcons[i]} />)}
                      </div>
                    </a>
                  </Link>
                )
              }
            })}
          </div>

        </section>

      </motion.main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const allProjects = getAllProjects();
  let searchProjects = allProjects;

  return {
    props: {
      //Here data serialising (dates, urls, ...),
      projects: searchProjects.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),

    },
  };
};

//    https://mathiasbynens.github.io/rel-noopener/