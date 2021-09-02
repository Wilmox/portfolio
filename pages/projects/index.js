import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import styles from '../../styles/Projects.module.css';
import Footer from '../../components/Footer.js';
import Chip from '../../components/Chip.js';
import Arrow from '../../components/ArrowSVG.js';

export default function Projects() {
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
        <section className={styles.projectSection}>
          
          <h1>Projects_:</h1>

          <div className={styles.projects}>
            <a className={styles.projectCard}>
              <Image src="/assets/img/project-openremote.jpg" width={1241} height={745} />

              <div className={styles.cardText}>
                <h2>OpenRemote Energy Challenge</h2>
                <p>Using a prediction model, the goal is to observe and make energy consumption predictions.</p>
              </div>
              <div className={styles.labels}>
                <Chip bgColor="rgba(52, 73, 94,1)" text={"Research"} icon={"\u{1F50D}"} />
                <Chip bgColor="#343A40" text={"AI & Robotics"} icon={"\u{1F916}"} />
              </div>
            </a>

            <a className={styles.projectCard}>
              <Image src="/assets/img/project-conecta.jpg" width={1241} height={745} />

              <div className={styles.cardText}>
                <h2>Conecta Software</h2>
                <p>Three week internship at Conecta Software & Erasmus in Tenerife, Spain in connection with IoT & smart devices</p>
              </div>
              <div className={styles.labels}>
                <Chip bgColor="rgba(52, 73, 94,1)" text={"Research"} icon={"\u{1F50D}"} />
                <Chip bgColor="#307bc7" text={"Docker"} icon={"\u{1F40B}"} />
              </div>
            </a>

            <a className={styles.projectCard}>
              <Image src="/assets/img/project-tictactoe-minmax.jpg" width={1241} height={745} />

              <div className={styles.cardText}>
                <h2>Tic Tac Toe AI</h2>
                <p>Making an unbeatable Tic-Tac-Toe opponent using the MiniMax decision theory algorithm.</p>
              </div>
              <div className={styles.labels}>
                <Chip bgColor="rgba(243, 156, 18, .7)" text={"Learning"} icon={"\u{1F4DA}"} />
                <Chip bgColor="#343A40" text={"AI & Robotics"} icon={"\u{1F916}"} />
              </div>
            </a>

            <a className={styles.projectCard}>
              <Image src="/assets/img/project-solar-system.jpg" width={1241} height={745} />

              <div className={styles.cardText}>
                <h2>Solar System simulation</h2>
                <p>A selfmade 1:1 simulation of our Solar System using the Unity 3D engine. Inspired by SpaceEngine on Steam.</p>
              </div>
              <div className={styles.labels}>
                <Chip bgColor="#5b3975" text={"Space"} icon={"\u{1F30C}"} />
                <Chip bgColor="#343A40" text={"Unity Engine"} icon={"\u{1F4BB}"} />
              </div>
            </a>
          </div>

        </section>

      </main>
      <Footer />
    </div>
  )
}

//    https://mathiasbynens.github.io/rel-noopener/