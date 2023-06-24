import ArrowUpwardOutlined from '@mui/icons-material/ArrowUpwardOutlined';
import { useEffect } from 'react';
import styles from './BackToTop.module.css';

const BackToTop = () => {

    useEffect(() => {
        var backToTopButton = document.getElementById("backToTop");

        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                //console.log(backToTopButton.classList)
                backToTopButton.style.opacity = "1";
                backToTopButton.style.visibility = "visible"
            } else {
                backToTopButton.style.opacity = "0";
                backToTopButton.style.visibility = "hidden"
            }
        });

    }, []);

    return (
        <a id="backToTop" href="#top" className={styles.backToTop}><ArrowUpwardOutlined/></a>
    );
};

export default BackToTop;