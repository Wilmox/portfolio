import styles from './Navigation.module.css';

const Navigation = ({hideHomeButton = false}) => {
    return (
        <nav className={styles.navigation}>
            {hideHomeButton ? (
                <ul className={styles.list}>
                    <li className={styles.listItem, styles.firstItem, styles.listItem_Hidden}><a href="/home">simonwilmots</a></li>
                    <li className={styles.listItem}><a href="/projects">projects</a></li>
                    <li className={styles.listItem}><a href="/notes">notes</a></li>
                    <li className={styles.listItem}><a href="/contact">contact</a></li>
                </ul>
            ) : (
                <ul className={styles.list}>
                    <li className={styles.listItem, styles.firstItem}><a href="/home">simonwilmots</a></li>
                    <li className={styles.listItem}><a href="/projects">projects</a></li>
                    <li className={styles.listItem}><a href="/notes">notes</a></li>
                    <li className={styles.listItem}><a hreft="/contact">contact</a></li>
                </ul>
            )}
        </nav>
     );
}
 
export default Navigation;