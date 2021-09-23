import styles from "./Chip.module.css"

const Chip = ({text, icon}) => {

    const chipStyle =  styles[text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\//\s]/gi, '').toLowerCase()];

    return ( 
        <div className={[styles.chip, chipStyle].join(" ")}>
            <div className={styles.chip_head}>{icon}</div>
            <div className={styles.chip_content}>{text}</div>
        </div>
        
     );
}
export default Chip;