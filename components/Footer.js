import styles from "./Footer.module.css"
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <hr className={styles.divider} />
            <div className={styles.socials}>
                <a target="_blank" rel="noopener noreferrer" href="mailto:simon.wilmots1@gmail.com" className={styles.footerItem}>Email</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/simonwilmots/" className={styles.footerItem}>LinkedIn</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/simon_wilmots/" className={styles.footerItem}>Instagram</a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wilmox" className={styles.footerItem}>Github</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/simon_wilmots/" className={styles.footerItem}>Twitter</a>
                <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/simonwilmots?si=a7d39d68c5574621" className={styles.footerItem}>Spotify</a>
            </div>
            <div className={styles.backToTop}>
                <a href="#top">
                    <ArrowUpwardRoundedIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;