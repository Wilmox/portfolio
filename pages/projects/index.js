import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation/Navigation';
import styles from '../../styles/Projects.module.css';
import Footer from '../../components/Footer/Footer.js';
import Chip from '../../components/Chip/Chip.js';
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
        <title>Simon Wilmots {"\u{1F680}"}</title>
        <meta name="description" content="SIMONWILMOTS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/img/favicon.ico" />
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
        <section className={styles.projectSection}>
          
          <h1>Projects_:</h1>

          <div className={styles.projects}>

          {projects.map((project) => (
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
            ))}
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