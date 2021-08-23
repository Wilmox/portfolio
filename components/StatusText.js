import { useEffect } from 'react';
import styles from './StatusText.module.css';

const StatusText = ({text="Student"}) => {

  useEffect(() => {
    const cycle = document.getElementById("cycle");

    const statusList = [
      "Student", //\u{1F393}
      "Computer Nerd", //\u{1F468}\u{200D}\u{1F4BB}
      "Astronomy Freak", //\u{1F30C}
      "Entrepeneur" //\u{1F468}\u{200D}\u{1F4BC}
    ]

    let i = 0;
    let counter = 0;
    const cycleText = () => {
      cycle.fadeOut = () => {
        elem.html(statusList[counter]);
        counter++;
        if(counter >= statusList.length) { counter = 0; }
        elem.fadeIn();
    };
      cycle.innerHTML = statusList[i];
      i = ++i % statusList.length;
    };
    cycleText();
    setInterval(cycleText, 3000);
  }, []);

  return (
      <h2 id="cycle" className={styles.status}>
            {text}
      </h2> 
    );
}
 
export default StatusText;