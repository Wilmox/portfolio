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

                In <span>2019</span> I started at PXL University of Applied Sciences and Arts in Hasselt where I graduated in application development with specifications in <span>AI & Robotics</span>.<br /><br />
              
                In <span>2022</span> I started at KU Leuven Faculty of Engineering Technology in Diepenbeek where I currently am a first-year master's student in <span>Industrial Engineering Sciences</span>.
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
            <Link href="/project/race-to-the-future">
              <a className={projects.projectCard}>
                <Image src="/assets/img/projects/project-rttf.jpg" width={1241} height={745} />

                <div className={projects.cardText}>
                  <h2>Race to the Future</h2>
                  <h3>Bachelor's internship</h3>
                  <p>My bachelor's research internship with the focus on conducting a literature study on existing possibilities within the domain of reinforcement learning and autonomous driving.</p>
                </div>
                <div className={projects.labels}>
                  <Chip text={"Reinforcement learning"} icon={"🤖"} />
                  <Chip text={"Autonomous driving"} icon={"🚗"} />
                  <Chip text={"Computer vision"} icon={"👁️"} />
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
            <Link href="/note/meditations">
              <a className={notes.noteCard}>
                <h2>Meditations</h2>
                <h3>Marcus Aurelius</h3>
                <p>
                  Meditations by Marcus Aurelius is (probably) the best book ever written. Authored in 170 AD by the most powerful man in the world. And unlike essentially every other book ever written, this was a book never intended for publication. It was not written for an audience, but for the writer himself.
                </p>
                <div className={notes.aboutNote}>
                  <Rating className={notes.rating} name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                  <Chip className={notes.noteChip} text={"Philosophy"} icon={"\u{1F5FF}"} />
                </div>
              </a>
            </Link>

            <Link href="/note/cant-hurt-me">
              <a className={notes.noteCard}>
                <h2>Can&apos;t Hurt Me</h2>
                <h3>David Goggins</h3>
                <p>
                Can&apos;t Hurt Me: Master Your Minds and Defy the Odds is the story of David Goggins, he transcended poverty and abuse to become one of the world&apos;s top endurance athletes. His story reveals how mastering your mind, hard work, and becoming friends with pain can help you achieve the unimaginable.
                </p>
                <div className={notes.aboutNote}>
                  <Rating className={notes.rating} name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                  <Chip className={notes.noteChip} text={"Psychology"} icon={"🧠"} />
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