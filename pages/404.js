import { motion } from 'framer-motion';
import Navigation from '../components/Navigation/Navigation';
import Image from 'next/image'
import styles from '../styles/Error.module.css'
import Footer from '../components/Footer/Footer'
import NotFound from '../components/NotFound/Notfound';
import Head from 'next/head';

export default function Custom404() {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    }
    return (
        <div>
            <Head>
                <title>404 Page Not Found | simonwilmots.com</title>
                <meta name="keywords" content="portfolio, simon, wilmots, Simon, Wilmots" />
                <meta name="description" content="404 Page Not Found" />
                <meta name="subject" content="Simon Wilmots's Portfolio" />
                <meta name="copyright" content="Simon Wilmots" />
                <meta name="language" content="en_GB" />
                <meta name="robots" content="index,follow" />
                <meta name="abstract" content="404 Page Not Found" />
                <meta name="summary" content="404 Page Not Found" />
                <meta name="Classification" content="Personal" />
                <meta name="author" content="Simon Wilmots" />
                <meta name="owner" content="Simon Wilmots" />
                <meta name="url" content="http://www.simonwilmots.com" />
                <meta name="rating" content="General" />

                <meta name="og:title" content="404 Page Not Found | simonwilmots.com" />
                <link rel="canonical" href="https://simonwilmots.com" />
                <meta property="og:locale" content="en_GB" />
                <meta name="og:type" content="website" />
                <meta name="og:url" content="http://simonwilmots.com" />
                <meta name="og:image" content="/assets/img/ico.ico" />
                <meta name="og:description" content="404 Page Not Found" />
                <meta name="og:site_name" content="http://www.simonwilmots.com" />

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
                <section className={styles.errorSection}>
                    <h2 className={styles.errorCode}>404.</h2>
                    <h2>
                        Page Not Found
                    </h2>

                    {/*<NotFound />*/}

                    {/*<Image src="/assets/img/ducks/duck-with-flippers.gif" width="500" height="250" />*/}
                </section>

            </motion.main>

        </div>

    )
}