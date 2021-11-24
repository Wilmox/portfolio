import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';
import projects from '../styles/Projects.module.css';
import notes from '../styles/Notes.module.css';

import Navigation from '../components/Navigation/Navigation';
import OutlinedArrow from '../components/OutlinedArrowSVG/OutlinedArrowSVG.js';
import StatusText from '../components/StatusText/StatusText';
import CircleText from '../components/CircleText/CircleText';
import Chip from '../components/Chip/Chip';
import Arrow from '../components/ArrowSVG/ArrowSVG';
import { Rating } from '@mui/material';
import Footer from '../components/Footer/Footer';
import ScrollProgress from '../components/ScrollProgress/ScrollProgress';
import BackToTop from '../components/BackToTop/BackToTop';

import { motion } from 'framer-motion';

export default function Home() {

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }

  return (
    <div id="top" className={styles.container}>
      <Head>
        <title>Simon Wilmots {"\u{1F680}"}</title>
        <meta name="keywords" content="portfolio, simon, wilmots, Simon, Wilmots"/>
        <meta name="description" content="AI & Robotics Student, Computer Nerd, Astronomy Freak, Verified Freelancer, Your Next Hire." />
        <meta name="subject" content="Simon Wilmots's Portfolio" />
        <meta name="copyright"content="Simon Wilmots" />
        <meta name="language" content="en_GB" />
        <meta name="robots" content="index,follow" />
        <meta name="abstract" content="AI & Robotics Student, Computer Nerd, Astronomy Freak, Verified Freelancer, Your Next Hire." />
        <meta name="summary" content="AI & Robotics Student, Computer Nerd, Astronomy Freak, Verified Freelancer, Your Next Hire." />
        <meta name="Classification" content="Personal" />
        <meta name="author" content="Simon Wilmots" />
        <meta name="owner" content="Simon Wilmots"/>
        <meta name="url" content="http://www.simonwilmots.com"/>
        <meta name="rating" content="General" />

        <meta name="og:title" content="Simon Wilmots 🚀"/>
        <link rel="canonical" href="https://simonwilmots.com" />
        <meta property="og:locale" content="en_GB" />
        <meta name="og:type" content="website"/>
        <meta name="og:url" content="http://simonwilmots.com"/>
        <meta name="og:image" content="/assets/img/ico.ico" />
        <meta name="og:description" content="AI & Robotics Student, Astronomy Freak, Computer Nerd, Verified Freelancer, Your Next Hire."/>
        <meta name="og:site_name" content="http://www.simonwilmots.com"/>

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
          <Navigation hideHomeButton />

          <h1 className={styles.title}>
            Simon <br />Wilmots
          </h1>

          <div className={styles.info}>
            <div className={styles.arrow}>
              <OutlinedArrow width="100%" height="100%" />
            </div>
            <StatusText text={"Astronomy Freak"} />
          </div>
        </section>
        <section className={styles.aboutSection}>

          <div className={styles.about}>
            <h2>ABOUT</h2> <br />
            {/*<Image src="/assets/img/me.jpeg" width={200} height={200} />*/}
            <p>
              I&apos;ve always been eager to learn from childhood. From <span>computers</span> and <span>space</span> to <span>psychology</span> and <span>science</span>, I had to find out how something functions. <br /><br />
              I am very passionate about <span>Personal development</span> and how you can always be the best version of yourself. <br /><br />
            </p>
            <details>
              <summary>More about me</summary>
              <p>
                <br />
                In <span>2016</span> I started my first study in Computer Science at the Miniemeninstituut in Leuven {"\u{1F1E7}\u{1F1EA}"}. In this education I have  received the basis that will serve me well in my next studie(s).<br /><br />

                In <span>2019</span> I started at PXL University of Applied Sciences and Arts in Hasselt. Currently, I am a last-year application development student with specifications in <span>AI & Robotics</span>.
              </p>
            </details>
          </div>
          <CircleText text="Simon Wilmots Simon Wilmots Simon Wilmots" /> {/*About About About About About About About*/}
        </section>

        <section className={projects.projectSection}>
          <h1>Projects_:</h1>

          <div className={projects.projects}>
            <Link href="/project/openremote-energy-transition-challenge">
              <a className={projects.projectCard}>
                <Image src="/assets/img/project-openremote.jpg" width={1241} height={745} />

                <div className={projects.cardText}>
                  <h2>Energy Transition Challenge</h2>
                  <h3>International Research Project</h3>
                  <p>Using a prediction model, the goal is to observe and make energy consumption predictions.</p>
                </div>
                <div className={projects.labels}>
                  <Chip text={"Research"} icon={"\u{1F50D}"} />
                  <Chip text={"AI & Robotics"} icon={"\u{1F916}"} />
                </div>
              </a>
            </Link>
            <Link href="/project/conecta-software">
              <a className={projects.projectCard}>
                <Image src="/assets/img/project-conecta.jpg" width={1241} height={745} />

                <div className={projects.cardText}>
                  <h2>Conecta Software</h2>
                  <h3>International Internship</h3>
                  <p>Three week internship at Conecta Software & Erasmus in Tenerife, Spain in connection with IoT & smart devices</p>
                </div>
                <div className={projects.labels}>
                  <Chip text={"Research"} icon={"\u{1F50D}"} />
                  <Chip text={"Docker"} icon={"\u{1F40B}"} />
                </div>
              </a>
            </Link>
          </div>

          <Link href="/projects">
            <a className={projects.link} >See more projects <Arrow /></a>
          </Link>

        </section>

        <section className={notes.noteSection}>
          <ul className={styles.breadcrumb}>
            <li>FEATURED NOTES</li>
            <li>
              <Link href="/notes">
                <a>VIEW ALL <Arrow /></a>
              </Link>
            </li>
          </ul>

          <div className={notes.notes}>
            <Link href="/note/a-brief-history-of-time">
              <a className={notes.noteCard}>
                <h2>A Brief History Of Time</h2>
                <h3>Stephen Hawking</h3>
                <p>
                  Hawking writes in non-technical terms about the structure, origin, development and eventual fate of the Universe. He talks about basic concepts like space and time,
                  basic building blocks that make up the Universe (such as quarks) and the fundamental forces that govern it (such as gravity).
                </p>
                <div className={notes.aboutNote}>
                  <Rating className={notes.rating} name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                  <Chip className={notes.noteChip} text={"Physics"} icon={"\u{1F320}"} />
                </div>
              </a>
            </Link>

            <Link href="/note/rich-dad-poor-dad">
              <a className={notes.noteCard}>
                <h2>Rich Dad Poor Dad</h2>
                <h3>Robert Kiyosaki</h3>
                <p>
                  This book advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing,
                  starting and owning businesses, as well as increasing one&apos;s financial intelligence. <br />
                  Rich Dad Poor Dad is written in the style of a set of parables, based on Kiyosaki&apos;s life.
                </p>
                <div className={notes.aboutNote}>
                  <Rating className={notes.rating} name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                  <Chip className={notes.noteChip} text={"Finance"} icon={"\u{1F4B8}"} />
                </div>
              </a>
            </Link>
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <h1>
            I&apos;m always <br />interested <br />in learning <br />new things.<br />
            Are you <br />considering <br />a project? <br />
            <a href="mailto:&#115;&#105;&#109;&#111;&#110;&#46;&#119;&#105;&#108;&#109;&#111;&#116;&#115;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Let%27s%C2%A0Talk">Let&apos;s talk.</a>
          </h1>

        </section>

      </motion.main>
      <Footer />
    </div>
  )
}