import styles from "./Chip.module.css"

const Chip = ({bgColor="gray", color="white", text, icon}) => {

    const cssStyle = {
        'color': color + " !important",
        'backgroundColor': bgColor + " !important",
    }
    console.log("configured color");
    return ( 
        <div style={cssStyle} className={styles.chip}>
            {console.log("applied color")}
            <div className={styles.chip_head}>{icon}</div>
            <div className={styles.chip_content}>{text}</div>
        </div>
        
     );
}
export default Chip;