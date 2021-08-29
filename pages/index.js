import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation.js'
import OutlinedArrow from '../components/OutlinedArrowSVG.js'
import styles from '../styles/Home.module.css'
import StatusText from '../components/StatusText.js'
import CircleText from '../components/CircleText.js'
import Chip from '../components/Chip.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simon Wilmots {"\u{1F680}"}</title>
        <meta name="description" content="SIMONWILMOTS PORTFOLIO WEBISTE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <section>
          <Navigation hideHomeButton />


          <h1 className={styles.title}>
            Simon_ <br />Wilmots
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
            <p>
              I've always been eager to learn from childhood. From <span>computers</span> and <span>space</span> to <span>psychology</span> and <span>science</span>, I had to find out how something functions. <br /><br />
              I am very passionate about <span>Personal development</span> and how you can always be the best version of yourself. <br /><br />
            </p>
            <details>
              <summary>Show more</summary>
              <p>
                <br />
                In <span>2016</span> I started my first study in Computer Science at the Miniemeninstituut in Leuven {"\u{1F1E7}\u{1F1EA}"}. In this education I have  received the basis that will serve me well in my next studie(s).<br /><br />

                In <span>2019</span> I started at PXL University of Applied Sciences and Arts in Hasselt. Currently, I am a last-year application development student with specifications in <span>AI & Robotics</span>.
              </p>
            </details>
          </div>
          <CircleText text="About About About About About About About" />
        </section>

        <section className={styles.projectSection}>
          <h1 className={styles.sectionHeading}>Projects_:</h1>

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
                <Chip bgColor="#307bc7" text={"Docker"} icon={"\u{1F40B}"}/>
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

          <a className={styles.link} href="/projects">{"See more projects>"}</a>

        </section>

      </main>
    </div>
  )
}
