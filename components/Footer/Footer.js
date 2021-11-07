import styles from "./Footer.module.css"
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <hr className={styles.divider} />
            <div className={styles.socials}>
                <a target="_blank" rel="noopener noreferrer" href="mailto:&#115;&#105;&#109;&#111;&#110;&#46;&#119;&#105;&#108;&#109;&#111;&#116;&#115;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Let%27s%C2%A0Talk" className={styles.footerItem}>Email</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/simonwilmots/" className={styles.footerItem}>LinkedIn</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/simon_wilmots/" className={styles.footerItem}>Instagram</a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wilmox" className={styles.footerItem}>Github</a>
                <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/simonwilmots?si=a7d39d68c5574621" className={styles.footerItem}>Spotify</a>
            </div>
            <div className={styles.backToTop}>
                <a href="#top">
                    <ArrowUpwardOutlinedIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;