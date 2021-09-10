import styles from './Navigation.module.css';
import Link from 'next/link';
import AsciiArt from './ConsoleLogAsciiArt';

const Navigation = ({ hideHomeButton = false }) => {
    return (
        <nav className={styles.navigation}>
            <AsciiArt />
            {hideHomeButton ? (
                <ul className={styles.list}>
                    <li className={styles.listItem, styles.listItem_Hidden}><a>simonwilmots</a></li>
                    <div className={styles.rightItems}>
                        <li className={styles.listItem}><Link href="/projects"><a>projects</a></Link></li>
                        <li className={styles.listItem}><Link href="/notes"><a>notes</a></Link></li>
                        <li className={styles.listItem}><Link href="/#contact"><a>contact</a></Link></li>
                    </div>
                </ul>
            ) : (
                <ul className={styles.list}>
                    <li className={styles.listItem}><Link href="/"><a>simonwilmots</a></Link></li>
                    <div className={styles.rightItems}>
                        <li className={styles.listItem}><Link href="/projects"><a>projects</a></Link></li>
                        <li className={styles.listItem}><Link href="/notes"><a>notes</a></Link></li>
                        <li className={styles.listItem}><Link href="/#contact"><a>contact</a></Link></li>
                    </div>
                </ul>
            )}
        </nav>
    );
}

export default Navigation;