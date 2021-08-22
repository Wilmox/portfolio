import styles from './StatusText.module.css';

const StatusText = ({text="Student"}) => {

    const statusList = [
        "Kaas \u{1F9C0}",
        "Computer Nerd",
        "Astrophile \u{1F680}",
        "Your Next Hire?",
        "Student"
      ];

    return (
        <h2 className={styles.status}>
              {text}
        </h2> 
     );
}
 
export default StatusText;