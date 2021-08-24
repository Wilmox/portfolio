import Head from 'next/head'
import Navigation from '../components/Navigation.js'
import OutlinedArrow from '../components/OutlinedArrowSVG.js'
import styles from '../styles/Home.module.css'
import StatusText from '../components/StatusText.js'
import CircleText from '../components/CircleText.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simon Wilmots {"\u{1F680}"}</title>
        <meta name="description" content="SIMONWILMOTS PORTFOLIO WEBISTE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/assets/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>

        <Navigation hideHomeButton/>

        <section>
          <h1 className={styles.title}>
              Simon <br/> Wilmots
          </h1>

          <div className={styles.info}>
            <div className={styles.arrow}>
              <OutlinedArrow width="100%" height="100%"/>
            </div>
            <StatusText text={"Astronomy Freak"}/>
          </div>
        </section> 
        <section className={styles.aboutSection}>
          <CircleText text="About About About About About About About"/>
          <div className={styles.about}>
              <p>
                I've always been eager to learn from childhood. From computers and the universe to psychology and science, I had to find out how something functions. <br/><br/>
                I am very passionate about <span>Personal development</span> and how you can always be the best version of yourself. <br/><br/>
              </p>
              <details>
                <summary>Show more</summary>
                <p>
                    In <span>2016</span> I started my first study in Computer Science at the Miniemeninstituut in Leuven {"\u{1F1E7}\u{1F1EA}"}. In this education I have  received the basis that will serve me well in my next studie(s).<br/><br/>

                    In <span>2019</span> I started at PXL University of Applied Sciences and Arts in Hasselt. Currently, I am a last-year application development student with specifications in <span>AI & Robotics</span>.
                </p>
              </details>

          </div>
        </section>
        
      </main>
    </div>
  )
}
