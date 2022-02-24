import { motion } from 'framer-motion';
import Navigation from '../components/Navigation/Navigation';
import Image from 'next/image'
import styles from '../styles/Error.module.css'
import Footer from '../components/Footer/Footer'

export default function Custom500() {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    }
    return (
        <div>
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
                    {/*<Navigation />*/}
                    <h2 className={styles.errorCode}>
                        500.
                    </h2>
                    <h2>
                        Internal Server Error
                    </h2>

                    {/*<Image src="/assets/img/ducks/duck-with-flippers.gif" width="500" height="250" />*/}
                </section>

            </motion.main>

        </div>

    )
}