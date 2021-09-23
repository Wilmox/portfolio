import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {

    
    return (
        <div className={[styles.progress_container, styles.fixed_top]}>
            <span className="progress-bar"></span>
        </div>
    );
}

export default ScrollProgress;