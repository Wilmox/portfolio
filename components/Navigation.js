import styles from './Navigation.module.css';
import Link from 'next/link';

const Navigation = ({hideHomeButton = false}) => {
    return (
        <nav className={styles.navigation}>
            {hideHomeButton ? (
                <ul className={styles.list}>
                    <li className={styles.listItem, styles.firstItem, styles.listItem_Hidden}><a>simonwilmots</a></li>
                    <li className={styles.listItem}><Link href="/projects"><a>projects</a></Link></li>
                    <li className={styles.listItem}><Link href="/notes"><a>notes</a></Link></li>
                    <li className={styles.listItem}><Link href="/#contact"><a>contact</a></Link></li>
                </ul>
            ) : (
                <ul className={styles.list}>
                    <li className={styles.listItem, styles.firstItem}><Link href="/home"><a>simonwilmots</a></Link></li>
                    <li className={styles.listItem}><Link href="/projects"><a>projects</a></Link></li>
                    <li className={styles.listItem}><Link href="/notes"><a>notes</a></Link></li>
                    <li className={styles.listItem}><Link href="/#contact"><a>contact</a></Link></li>
                </ul>
            )}
        </nav>
     );
}
 
export default Navigation;